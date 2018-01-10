<?php

// http_response_code(500);

class Ville {

    public $codePostal;
    public $nom;
}

$ville = new Ville();
if (array_key_exists("codepostal", $_GET)){
    $ville->codePostal = $_GET["codepostal"];

    if (substr($ville->codePostal, 0, 2) == "75")
        $ville->nom = "Paris";
    else    
        $ville->nom = "Inconnue";
}

header("content-type: application/json");
echo json_encode($ville);
