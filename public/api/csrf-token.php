<?php
session_start();

header('Content-Type: application/json; charset=utf-8');

try {
    $token = bin2hex(random_bytes(32));
    $_SESSION['csrf_token'] = $token;
    
    echo json_encode(['token' => $token]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to generate token']);
}