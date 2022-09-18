<?php
header("Content-type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin:*");

include ("conexao.php");
$conexao = con_mysql();

if(isset($_POST) and isset($_FILES["image"])){

    $compositor = $_POST["compositor"];
    $genero = $_POST['genero'];
    $musica = $_POST["musica"];
    $url = $_POST['url'];

    $image = $_FILES["image"]["name"];
    $extensao = strtolower(pathinfo($image, PATHINFO_EXTENSION));

    $newNameImage = md5($image).".".$extensao;
    $diretorio = "./photos/";

    move_uploaded_file($_FILES["image"]["tmp_name"], $diretorio.$newNameImage);

    $SQL = "INSERT INTO videos (compositor,genero,musica,link,foto) VALUES (?,?,?,?,?) ";
    $operacao = $conexao->prepare($SQL);
    $inserir = $operacao->execute(array($compositor, $genero, $musica, $url, $newNameImage));

    echo "Gravado";
}

?>