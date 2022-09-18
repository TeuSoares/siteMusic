<?php
date_default_timezone_set ("America/Sao_Paulo");

require_once "./vendor/autoload.php";
require_once("conexao.php");

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

header("Access-Control-Allow-Origin:*");
header("Content-type: application/json");

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$conexao = con_mysql();

$_POST = json_decode(file_get_contents("php://input"),true);

if(isset($_POST["username"]) and isset($_POST["password"])){

    $username = $_POST['username'];
    $password = $_POST['password'];

    $operacao = $conexao->prepare("SELECT * from usuarios WHERE usuario = :usuario ");
    $operacao->bindParam(':usuario', $username, PDO::PARAM_STR);
    $operacao->execute();
    $row = $operacao->rowCount();
    
    $dados = $operacao->fetch(PDO::FETCH_ASSOC);

    $resposta = array();

    $payload = [
        'exp' => time() + (1 * 24 * 60 * 60),
        'usuario' => $dados["usuario"],
        'iat' => time()
    ];

    // date("d/m/Y H:i:s", time() + (1 * 24 * 60 * 60))

    $key = $_ENV['KEY'];
    
    if($row > 0){
        if(password_verify($password, $dados["senha"])){

            try {

                $jwt = JWT::encode($payload, $key, 'HS256');
                $decoded = JWT::decode($jwt, new Key($key, 'HS256'));
    
                $resposta = array(
                    "row"   =>  $row,
                    'token' =>  $jwt
                );

                die(json_encode($resposta));

            } catch (Throwable $e) {
                if ($e->getMessage() === 'Expired token') {
                    http_response_code(401);
                    die('EXPIRED');
                }
            }

        }
    }

}

?>