<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include ("conexao.php");
$conexao = con_mysql();

if(isset($_GET["IdVideo"])){

    $IdVideo = $_GET["IdVideo"];

    $SQL = "DELETE FROM videos WHERE IdVideo = :IdVideo";
    $operacao = $conexao->prepare($SQL);
    $operacao->bindParam(':IdVideo', $IdVideo, PDO::PARAM_STR);
    $inserir = $operacao->execute();

    echo "Deletado";
}

?>