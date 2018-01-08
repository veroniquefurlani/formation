

let user = { "nom" : "SPORTELLI", "prenom" : "Felix", 
            "femme" :{ "nom" : "SPORTELLI", "prenom": "Aurélie" }, 
            "enfants" : [{ "nom" : "SPORTELLI", "prenom": "Léo" }, { "nom" : "SPORTELLI", "prenom": "Léa"}] };
console.log(user);

let mari =  { "nom" : "SPORTELLI", "prenom" : "Felix" };
let femme = { "nom" : "SPORTELLI", "prenom" : "Aurélie" };
let enfants = [{ "nom" : "SPORTELLI", "prenom": "Léo" }, { "nom" : "SPORTELLI", "prenom": "Léa"}];
console.log(mari.nom + " " + mari.prenom + " " + femme.nom + " " + femme.prenom + " " + enfants[0].nom + " " + enfants[0].prenom + " " + enfants[1].nom + " " + enfants[1].prenom);

enfants[0].pere = mari;
enfants[1].pere = mari;
console.log("le père de " + enfants[0].prenom + ' est : ' + mari.prenom);
console.log("le père de " + enfants[1].prenom + ' est : ' + mari.prenom);

enfants[0].mere = femme;
enfants[1].mere = femme;
console.log(enfants[0].prenom + ' : ' + enfants[0].mere);
console.log(enfants[1].prenom + ' : ' + enfants[1].mere);

console.log(mari.prenom + " et " + femme.prenom + " ont " +  enfants.length + " enfants");

