// DOCUMENT (ce qui se trouve dans l'html)

// --------------------------------------------------------------------
// Avant HTML5 ( < 2010 )
// --------------------------------------------------------------------
let p1 = document.getElementById("p1");
console.log(p1);
console.log(p1.innerText);
p1.innerText = "plop";

let sousligne = document.getElementsByClassName("sousligne");
console.log(sousligne);

let tousLesP = document.getElementsByTagName("p");
console.log(tousLesP);


// --------------------------------------------------------------------
// AVEC HTML5
// --------------------------------------------------------------------
console.log("------------------------------------");
let p1bis = document.querySelector("#p1");
console.log(p1bis);

let souslignebis = document.querySelectorAll(".sousligne");
console.log(souslignebis);

let tousLesPbis = document.querySelectorAll("p");
console.log(tousLesPbis);

let p3 = document.querySelector("#p3");
console.log(p3);
console.log(p3.className);
p3.classname = "";

let tbody = document.querySelector("tbody");
tbody.innerHTML += "<tr><td>SPORTELLY</td><td>Aurélie</td><td>31</td></tr>";

function purge(){
    tbody.innerHTML = "";
}
let purgeButton = document.querySelector("#purge2");
purgeButton.onclick = function(){
    purge();
}


function desouligneTest3(){
    p3.classname = "";
}
let sousligneButton = document.querySelector("#sousligneButton")
sousligneButton.onclick = function(){
    if (p3.className == "sousligne") {
        p3.className = "";
    } else {
        p3.className = "sousligne";
    }

}

//  formulaire
let addButton = document.querySelector("#addButton");
addButton.onclick = function(){
    const nom = document.querySelector("#name").value; // "value" : pour récupérer d'un champ input
    const prenom = document.querySelector("#firstname").value; // "value" : pour récupérer d'un champ input
    const age = document.querySelector("#age").value; // "value" : pour récupérer d'un champ input
    tbody.innerHTML += "<tr><td>" + nom + "</td><td>" + prenom + "</td><td>" + age + "</td></tr>";

    console.log("nom= " + nom);
    console.log("prenom= " + prenom);
    console.log("age= " + age);

    console.log("bouton cliqué");
}


