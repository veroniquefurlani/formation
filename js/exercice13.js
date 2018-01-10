// declaration de l'objet général


$(document).ready(function(){

    $.ajax(
       {
           "url" : "http://localhost:8080/formation/index.php",
           "type" : "GET"
       } 

    // si cela se passe bien :    
    ).done(function(donnees) {
        console.log(donnees);
    }).fail(function(){
        console.log("OUPS");
    }).always(function(){
        console.log("TOUJOURS");
    })   
    ;
});
