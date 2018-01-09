function disBonjour(){
    console.log("bonjour");
}
disBonjour();

function disBonjourPrenom(prenom){
    const p = (prenom == "") ? "monsieur" : prenom ;
    console.log("bonjour " + p);
}
disBonjourPrenom("lisa");


function somme(a, b){
    return a+b;
}
console.log(somme(1,2));
console.log(somme("1","2"));


function creerUtilisateur (nom, prenom, age){
    return { "nom" : nom, "prenom": prenom, "age": age };
}
let user = creerUtilisateur("furlani","vero",100);
console.log(user);


let maFunction = function(){
    console.log("dis bonjour");
}
maFunction();


let maFunction2 = function(a, b){
    return a+b;
}
console.log( maFunction2( 1, 2) );


let maFunction3 = function(){
    console.log("bonjour je m'appelle " + this.prenom);
}
if (user.prenom == "")
    user.soispoli = maFunction;
else
    user.soispoli = maFunction3;
user.soispoli();


function getNom(nom, casse){
    if (casse == true)
        return nom.toUpperCase();
    else 
        return nom;
}
console.log( getNom("vero", true) );







function avancer(etat){
    if (etat == "avance") 
        return "La voiture avance";
    else    
        return "autre etat";
}

function arreter(etat){
    if (etat == "arret") 
        return "La voiture arrête";
    else    
        return "autre etat";
}

function reculer(etat){
    if (etat == "recule") 
        return "La voiture recule";
    else    
        return "autre etat";
}


let marque = "dacia";
let modele = "duster";
let motorisation = "15 cv";
let etat = "arret";
let voitureVero = { "marque" : marque,  "modele" : modele, "motorisation" : motorisation, "etat": etat };

voitureVero.getDescription = function (  ){
    return this.marque + " " + this.modele + " " + this.motorisation + this.etat;
}
console.log(voitureVero.getDescription());


voitureVero.avancer = function ( ) {
    this.etat = "avance";
    return "La voiture avance";
}
console.log(voitureVero.avancer());
console.log(voitureVero.getDescription());


voitureVero.arreter = function ( ) {
    this.etat = "arrete";
    return "La voiture s'arrête";
}
console.log(voitureVero.arreter());
console.log(voitureVero.getDescription());


voitureVero.reculer = function ( ) {
    this.etat = "recule";
    return "La voiture recule";
}
console.log(voitureVero.reculer());
console.log(voitureVero.getDescription());
