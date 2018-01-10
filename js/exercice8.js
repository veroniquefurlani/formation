// créer un objet utilisateur (prenom, nom, age, enfants)
// méthode listEnfants qui liste les enfants
// méthode nbEnfants qui renvoie le nb d'enfants
// méthode ajouteEnfants (enfant) qui ajoute un enfant


// déclaration de l'objet
// --------------------------------------------------------
let user = { };
user.nom = "SPORTELLI";
user.prenom = "Felix";
user.age = 32;
user.enfants = ["Léa"];  // objet contenant les enfants



// méthode listEnfants qui liste les enfants
// --------------------------------------------------------
user.nbEnfants = function(){
    return this.enfants.length;
}
console.log(user.nom + " a " + user.nbEnfants() + " enfants");


// méthode nbEnfants qui renvoie le nb d'enfants
// --------------------------------------------------------
user.listEnfants = function(){
    let i=0;
    while(i < user.nbEnfants()){
        console.log(user.enfants[i++]);
    }
    console.log("--------------------");
}
user.listEnfants();


// méthode ajouteEnfants(enfant) qui ajoute un enfant
// --------------------------------------------------------
user.ajouteEnfants = function(nouvelEnfant){    
    this.enfants.push(nouvelEnfant);
}
user.ajouteEnfants("Léo");

// appel de la méthode qui permet de lister les enfants
user.listEnfants();