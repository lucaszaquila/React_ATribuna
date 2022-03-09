<?php
include("ClassConexao.php");

class ClassArticles extends ClassConexao{
    public function exibeArticles() {
        $BFetch=$this->conectaDB()->prepare("SELECT * FROM materia LIMIT 10;");
        $BFetch->execute();
        
        $J=[];
        $I=0;

        while($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)) {
            $J[$I] = [
                "title"->$Fetch['titulo']
                "subtitle"->$Fetch['subtitulo']
                "image"->$Fetch['id_imagem_principal']
                "call"->$Fetch['id_editoria']
                "path"->$Fetch['url']
            ];
            $I++;
        }

        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json");
        echo json_encode($J)
    }
}