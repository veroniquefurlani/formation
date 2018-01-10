<?php

// pour provoquer le OUPS dans la console
// http_response_code(500);

class Utilisateur {

    public $id;
    public $name;
    public $enfants;
}

$currentUser = new Utilisateur();
$currentUser->id = 1;
$currentUser->name = "felix";

$leo = new Utilisateur();
$leo->id = 2;
$leo->name = "leo";

$lea = new Utilisateur();
$lea->id = 3;
$lea->name = "lea";

$currentUser->enfants = array();
array_push($currentUser->enfants, $leo);
array_push($currentUser->enfants, $lea);

header("content-type: application/json");
echo json_encode($currentUser);
