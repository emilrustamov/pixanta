<?php

declare(strict_types=1);

// Включаем отображение ошибок для отладки (удалить в production)
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Подключаем автозагрузку
require __DIR__ . '/../vendor/autoload.php';

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

// Подключаем конфиг
$config = require __DIR__ . '/../config.php';

// Заголовки безопасности
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-CSRF-Token');

// Обработка OPTIONS запроса для CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Проверка метода
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed.'
    ]);
    exit;
}

// Получаем и декодируем JSON
$input = json_decode(file_get_contents('php://input'), true);

if (!is_array($input)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request format.'
    ]);
    exit;
}

// Извлекаем данные
$name = trim($input['name'] ?? '');
$company = trim($input['company'] ?? '');
$email = trim($input['email'] ?? '');
$phone = trim($input['phone'] ?? '');
$message = trim($input['message'] ?? '');
$website = trim($input['website'] ?? '');
$csrfToken = trim($input['csrf_token'] ?? '');
$timestamp = (int)($input['timestamp'] ?? 0);

// ============ ЗАЩИТА ============

// 1. Проверка CSRF токена
session_start();
if (empty($_SESSION['csrf_token']) || $csrfToken !== $_SESSION['csrf_token']) {
    http_response_code(403);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid security token. Please refresh the page.'
    ]);
    exit;
}

// 2. Защита от replay-атак (5 минут)
$currentTime = time();
if (abs($currentTime - $timestamp) > 300) {
    http_response_code(403);
    echo json_encode([
        'success' => false,
        'message' => 'Request expired. Please try again.'
    ]);
    exit;
}

// 3. Rate limiting (5 запросов в час)
$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$rateLimitKey = 'rate_limit_' . md5($ip);

if (isset($_SESSION[$rateLimitKey])) {
    $attempts = (int)$_SESSION[$rateLimitKey];
    if ($attempts >= 5) {
        http_response_code(429);
        echo json_encode([
            'success' => false,
            'message' => 'Too many requests. Please try again later.'
        ]);
        exit;
    }
    $_SESSION[$rateLimitKey] = $attempts + 1;
} else {
    $_SESSION[$rateLimitKey] = 1;
}

// 4. Honeypot проверка
if ($website !== '') {
    http_response_code(403);
    echo json_encode([
        'success' => false,
        'message' => 'Spam detected.'
    ]);
    exit;
}

// 5. Проверка обязательных полей
if ($name === '' || $email === '' || $phone === '' || $message === '') {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Please fill in all required fields.'
    ]);
    exit;
}

// 6. Ограничение длины полей
if (mb_strlen($name) > 100) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Name is too long (max 100 characters).'
    ]);
    exit;
}

if (mb_strlen($company) > 150) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Company name is too long (max 150 characters).'
    ]);
    exit;
}

if (mb_strlen($email) > 254) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Email is too long.'
    ]);
    exit;
}

if (mb_strlen($phone) > 50) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Phone number is too long.'
    ]);
    exit;
}

if (mb_strlen($message) > 5000) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Message is too long (max 5000 characters).'
    ]);
    exit;
}

// 7. Валидация email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid email address.'
    ]);
    exit;
}

// 8. Защита от Header Injection и XSS
$dangerousPatterns = ["/\r/", "/\n/", "/\0/"];
foreach ([$name, $email, $phone, $company] as $value) {
    foreach ($dangerousPatterns as $pattern) {
        if (preg_match($pattern, $value)) {
            http_response_code(400);
            echo json_encode([
                'success' => false,
                'message' => 'Invalid input contains forbidden characters.'
            ]);
            exit;
        }
    }
}

// 9. Валидация телефона
if (!preg_match('/^\+?[\d\s\-()]{7,20}$/', $phone)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid phone number format. Use +7 999 999-99-99'
    ]);
    exit;
}

// 10. Проверка на спам-слова
$spamKeywords = ['viagra', 'casino', 'porn', 'xxx', 'sex', 'crypto', 'bitcoin'];
$messageLower = mb_strtolower($message);
foreach ($spamKeywords as $keyword) {
    if (strpos($messageLower, $keyword) !== false) {
        http_response_code(403);
        echo json_encode([
            'success' => false,
            'message' => 'Message contains prohibited content.'
        ]);
        exit;
    }
}

// ============ ОТПРАВКА ПИСЬМА ============

try {
    $mail = new PHPMailer(true);

    // Настройки SMTP
    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_username'];
    $mail->Password = $config['smtp_password'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = $config['smtp_port'];
    $mail->CharSet = 'UTF-8';
    $mail->Timeout = 30;
    $mail->SMTPDebug = 0; // 0 = выключено, 2 = для отладки

    // Отправитель
    $mail->setFrom($config['smtp_username'], 'Pixanta LED');
    
    // Получатель
    $mail->addAddress('info@pixantaled.com');
    
    // Reply-To
    $mail->addReplyTo($email, $name);

    // Очищаем лишние получатели
    $mail->ClearAllRecipients();
    $mail->addAddress('info@pixantaled.com');
    $mail->ClearReplyTos();
    $mail->addReplyTo($email, $name);
    $mail->ClearAttachments();

    // Контент письма
    $mail->isHTML(true);

    // Экранирование данных
    $safeName = htmlspecialchars($name, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $safeCompany = htmlspecialchars($company, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $safeEmail = htmlspecialchars($email, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $safePhone = htmlspecialchars($phone, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $safeMessage = htmlspecialchars($message, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');

    // Тема
    $mail->Subject = 'New contact form submission from ' . $safeName;

    // HTML версия
    $mail->Body = '
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                h2 { color: #24479c; }
                table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                th { background: #24479c; color: white; padding: 12px; text-align: left; }
                td { padding: 12px; border: 1px solid #ddd; }
                .message-content { white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px; }
                .footer { margin-top: 30px; color: #999; font-size: 12px; border-top: 1px solid #eee; padding-top: 20px; }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>📧 New Message from Pixanta LED Website</h2>
                <table>
                    <tr>
                        <th style="width: 30%;">Field</th>
                        <th>Value</th>
                    </tr>
                    <tr>
                        <td><strong>Name</strong></td>
                        <td>' . $safeName . '</td>
                    </tr>
                    <tr>
                        <td><strong>Company</strong></td>
                        <td>' . ($safeCompany ?: 'Not provided') . '</td>
                    </tr>
                    <tr>
                        <td><strong>Email</strong></td>
                        <td><a href="mailto:' . $safeEmail . '">' . $safeEmail . '</a></td>
                    </tr>
                    <tr>
                        <td><strong>Phone</strong></td>
                        <td>' . $safePhone . '</td>
                    </tr>
                    <tr>
                        <td><strong>Message</strong></td>
                        <td><div class="message-content">' . nl2br($safeMessage) . '</div></td>
                    </tr>
                </table>
                <div class="footer">
                    <p><strong>IP Address:</strong> ' . htmlspecialchars($ip) . '</p>
                    <p><strong>Submitted:</strong> ' . date('Y-m-d H:i:s', $timestamp) . '</p>
                    <p>This email was sent from your website contact form.</p>
                </div>
            </div>
        </body>
        </html>
    ';

    // Текстовая версия
    $mail->AltBody = 
        "New Message from Pixanta LED Website\n" .
        "====================================\n\n" .
        "Name: {$safeName}\n" .
        "Company: " . ($safeCompany ?: 'Not provided') . "\n" .
        "Email: {$safeEmail}\n" .
        "Phone: {$safePhone}\n\n" .
        "Message:\n{$safeMessage}\n\n" .
        "IP: {$ip}\n" .
        "Timestamp: " . date('Y-m-d H:i:s', $timestamp);

    // Отправляем
    $mail->send();

    // Очищаем CSRF токен
    unset($_SESSION['csrf_token']);
    
    // Очищаем rate limiting (опционально)
    // unset($_SESSION[$rateLimitKey]);

    // Успешный ответ
    echo json_encode([
        'success' => true,
        'message' => 'Your message has been sent successfully. We will contact you soon!'
    ]);

} catch (Exception $e) {
    // Логируем ошибку
    error_log('PHPMailer Error: ' . $e->getMessage());
    
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Unable to send message. Please try again later or contact us directly.'
    ]);
}