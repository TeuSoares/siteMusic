<?php
header("Content-type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin:*");

include ("conexao.php");
$conexao = con_mysql();

$_POST = json_decode(file_get_contents("php://input"),true);

if(isset($_POST["username"]) and isset($_POST["password"])){

    $username = $_POST["username"];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $operacao = $conexao->prepare("SELECT * from usuarios WHERE usuario = :usuario ");
    $operacao->bindParam(':usuario', $username, PDO::PARAM_STR);
    $operacao->execute();
    $row = $operacao->rowCount();
    
    $dados = $operacao->fetch(PDO::FETCH_ASSOC);

    if($row == 0){
        $SQL = "INSERT INTO usuarios (usuario,senha) VALUES (?,?) ";
        $operacao = $conexao->prepare($SQL);
        $inserir = $operacao->execute(array($username, $password));

        echo "Cadastrado";
    }else{
        $resposta = [
            "msg" => "Já existe",
            "usuario" => $dados["usuario"],
        ];

        die(json_encode($resposta));
    }

}

?>