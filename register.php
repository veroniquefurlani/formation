<?php

$user = json_decode($_POST['user']);/*
print_r($user);

// créer un objet dossier par bateau 
// qui contient tous les elements du user
// + statut du dossier en cours
// + date de réception du dossier

*/



$dossiers = array();



foreach ($user->nbbateau as $key => $value){   

$date = getDate();

    $dossier = array();
    $dossier['id'] = rand();
    $dossier['date'] = getDate();
    
    

    $dossier['statut'] = "en-cours";
    
    $dossier['sexe'] = $user->sexe;
    $dossier['nom'] = $user->nom;
    $dossier['prenom'] = $user->prenom;
    $dossier['age'] = $user->age;
    $dossier['nomfemme'] = $user->nomFemme;
    $dossier['codepostal'] = $user->codepostal;
    $dossier['ville'] = $user->ville;
    
    $dossier['assurance'] = false;
    $dossier['casse'] = false;

    foreach ($user->interet as $key2 => $value2){
        if ($value2 == "assurance") $dossier['assurance'] = true; 
        if ($value2 == "casse") $dossier['casse'] = true;
    }

    $dossier['tailleBateau'] = $value;
    array_push($dossiers, $dossier);
}




print_r(json_encode($dossiers));









