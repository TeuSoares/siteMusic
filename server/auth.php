<?php

require './vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Authorization, Content-Type, x-xsrf-token, x_csrftoken, Cache-Control, X-Requested-With');

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$headers = getallheaders();
$authorization = $headers["Authorization"];
$token = str_replace('Bearer ', '', $authorization);

$key = $_ENV['KEY'];

try {

    $decoded = JWT::decode($token, new Key($key, 'HS256'));
    echo json_encode($decoded);

} catch (Throwable $e) {
    if ($e->getMessage() === 'Expired token') {
        http_response_code(401);
        die('EXPIRED');
    }
}

?>