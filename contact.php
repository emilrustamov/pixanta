<?php

declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

$config = require __DIR__ . '/config.php';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);

    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed.'
    ]);

    exit;
}

// Получаем JSON
$input = json_decode(file_get_contents('php://input'), true);

if (!is_array($input)) {
    http_response_code(400);

    echo json_encode([
        'success' => false,
        'message' => 'Invalid request.'
    ]);

    exit;
}

// Получаем данные
$name = trim($input['name'] ?? '');
$company = trim($input['company'] ?? '');
$email = trim($input['email'] ?? '');
$phone = trim($input['phone'] ?? '');
$message = trim($input['message'] ?? '');
$website = trim($input['website'] ?? '');

// Honeypot
if ($website !== '') {
    http_response_code(403);

    echo json_encode([
        'success' => false,
        'message' => 'Spam detected.'
    ]);

    exit;
}

// Проверка обязательных полей
if (
    $name === '' ||
    $email === '' ||
    $phone === '' ||
    $message === ''
) {
    http_response_code(400);

    echo json_encode([
        'success' => false,
        'message' => 'Please fill in all required fields.'
    ]);

    exit;
}

// Ограничение длины
if (
    mb_strlen($name) > 100 ||
    mb_strlen($company) > 150 ||
    mb_strlen($email) > 255 ||
    mb_strlen($phone) > 50 ||
    mb_strlen($message) > 5000
) {
    http_response_code(400);

    echo json_encode([
        'success' => false,
        'message' => 'Input is too long.'
    ]);

    exit;
}

// Email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);

    echo json_encode([
        'success' => false,
        'message' => 'Invalid email.'
    ]);

    exit;
}

// Защита от Header Injection
foreach ([$name, $email, $phone] as $value) {
    if (preg_match("/[\r\n]/", $value)) {
        http_response_code(400);

        echo json_encode([
            'success' => false,
            'message' => 'Invalid input.'
        ]);

        exit;
    }
}

// Пока письмо не отправляем

try {

    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_username'];
    $mail->Password = $config['smtp_password'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = $config['smtp_port'];
    $mail->CharSet = 'UTF-8';

    $mail->setFrom($config['smtp_username'], 'Pixanta LED');

    $mail->addAddress('info@pixantaled.com');

    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);

    $mail->Subject = 'New contact form submission';

    $mail->Body = '
        <h2>New message from Pixanta LED website</h2>

        <table cellpadding="6" cellspacing="0" border="1" style="border-collapse:collapse;">
            <tr>
                <td><strong>Name</strong></td>
                <td>' . htmlspecialchars($name) . '</td>
            </tr>

            <tr>
                <td><strong>Company</strong></td>
                <td>' . htmlspecialchars($company) . '</td>
            </tr>

            <tr>
                <td><strong>Email</strong></td>
                <td>' . htmlspecialchars($email) . '</td>
            </tr>

            <tr>
                <td><strong>Phone</strong></td>
                <td>' . htmlspecialchars($phone) . '</td>
            </tr>

            <tr>
                <td><strong>Message</strong></td>
                <td>' . nl2br(htmlspecialchars($message)) . '</td>
            </tr>
        </table>
    ';

    $mail->AltBody =
        "Name: {$name}\n" .
        "Company: {$company}\n" .
        "Email: {$email}\n" .
        "Phone: {$phone}\n\n" .
        "Message:\n{$message}";

    $mail->send();

    echo json_encode([
        'success' => true,
        'message' => 'Your message has been sent successfully.'
    ]);

} catch (Exception $e) {

    http_response_code(500);

    echo json_encode([
        'success' => false,
        'message' => 'Mail sending failed.'
    ]);

}