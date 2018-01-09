function appelServeur(){
    return '{"nom":"sportelli","prenom":"felix"}';

}

// récupére mon objet
let message = appelServeur();
console.log(message);

// comment passer d'une str à un objet ?
// JSON.parse : permet d'analyser un json en objet JS
let user = JSON.parse(message);
console.log(user);

// passer d'un objet JS => str
// JSON.stringify : permet de "stringifier" un objet JS
let messageAEnvoyer = JSON.stringify(user);
console.log(messageAEnvoyer);

