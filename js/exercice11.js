// DOCUMENT (ce qui se trouve dans l'html)




// déclaration de l'objet
// --------------------------------------------------------
let utilisateurs = [];
let felix = { "nom":"sportelli", "prenom":"felix", "age":32 };
let aurelie = { "nom":"sportelli", "prenom":"aurelie", "age":31 };

// on ajoute chaque utilisateur défini dans l'objet "utilisteurs"
utilisateurs.push(felix);
utilisateurs.push(aurelie);


let dessineTableau = function(utilisateurs){
    console.log(utilisateurs);
    let tbody = document.querySelector("tbody");  
    tbody.innerHTML="";  
    for (let index =0 ; index < utilisateurs.length; index++){
        const element = utilisateurs[index];
        console.log(element);
        tbody.innerHTML += "<tr><td>" + element.nom + "</td><td>" + element.prenom + "</td><td>" + element.age + "</td></tr>";
    }
}
dessineTableau(utilisateurs);

function purge(){
    utilisateurs.splice(0, utilisateurs.length);
    console.log(utilisateurs);
    dessineTableau(utilisateurs);
}

let purgeButton = document.querySelector("#purge2");
purgeButton.onclick = function(){
    purge();
}



//  formulaire
let addButton = document.querySelector("#addButton");
addButton.onclick = function(){
    const nouvelUtilisateur = {};
    nouvelUtilisateur.nom = document.querySelector("#name").value; // "value" : pour récupérer d'un champ input
    nouvelUtilisateur.prenom = document.querySelector("#firstname").value; // "value" : pour récupérer d'un champ input
    nouvelUtilisateur.age  = document.querySelector("#age").value; // "value" : pour récupérer d'un champ input

    console.log(nouvelUtilisateur.nom);
    utilisateurs.push(nouvelUtilisateur);

    dessineTableau(utilisateurs);
    
}


