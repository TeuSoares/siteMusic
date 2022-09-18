<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");

include("conexao.php");
$conexao = con_mysql();

$operacao = $conexao->prepare("SELECT * FROM videos ORDER BY rand()"); 
$operacao->execute();

$resposta = array();
while($dados = $operacao->fetch(PDO::FETCH_ASSOC)){
    $resposta[] = $dados;
}

die(json_encode($resposta));
?>