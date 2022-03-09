<?php
abstract class ClassConexao {
    protected function conectDB() {
        try{
            $Con=new PDO("mysql:host=192.168.10.168;dbname=atribuna_prod","lucasa","tiWebAtribuna")
            return $Con;
        }
        catch(PDOException $Erro){
            echo $Erro->getMessage();
        }
    }
}