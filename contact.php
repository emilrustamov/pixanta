<?php

declare(strict_types=1);

require __DIR__ . '/vendor/autoload.php';

use Resend\Resend;

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed.'
    ]);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!is_array($input)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request.'
    ]);
    exit;
}

$name = trim($input['name'] ?? '');
$company = trim($input['company'] ?? '');
$email = trim($input['email'] ?? '');
$phone = trim($input['phone'] ?? '');
$message = trim($input['message'] ?? '');
$website = trim($input['website'] ?? '');

// honeypot anti-spam
if ($website !== '') {
    http_response_code(403);
    echo json_encode([
        'success' => false,
        'message' => 'Spam detected.'
    ]);
    exit;
}

// required fields
if ($name === '' || $email === '' || $phone === '' || $message === '') {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Please fill in all required fields.'
    ]);
    exit;
}

// email validation
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid email.'
    ]);
    exit;
}

// extra safety
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

try {

    $client = new Resend('re_YLBLF4zk_LcjGZ9KRwSVvhj6oWfgZWKaP');

    $client->emails->send([
        'from' => 'Pixanta LED <onboarding@resend.dev>',
        'to' => ['info@pixantaled.com'],
        'subject' => 'New contact form submission',
        'html' => "
            <h2>New message from website</h2>
            <p><b>Name:</b> " . htmlspecialchars($name) . "</p>
            <p><b>Company:</b> " . htmlspecialchars($company) . "</p>
            <p><b>Email:</b> " . htmlspecialchars($email) . "</p>
            <p><b>Phone:</b> " . htmlspecialchars($phone) . "</p>
            <p><b>Message:</b><br>" . nl2br(htmlspecialchars($message)) . "</p>
        "
    ]);

    echo json_encode([
        'success' => true,
        'message' => 'Your message has been sent successfully.'
    ]);

} catch (\Throwable $e) {

    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Mail sending failed.'
    ]);
}