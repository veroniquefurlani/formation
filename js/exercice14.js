$(document).ready(function(){

    $("#page1Button").click(function(){
       $("#page1").hide(); 
       $("#page2").show();  
       $("#page3").hide(); 
    });



   // nom de jeune fille
    $("#homme").click(function(){
        $("#childname").prop("disabled", true);
    });

    $("#femme").click(function(){
        $("#childname").prop("disabled", false);
    });

    // age
    $("#age").change(function(){
        $("#ageTexte").text( $("#age").val());
    });

    // code postal
    $("#codepostal").keyup(function(){
        console.log($("#codepostal").val().length);

        if ($("#codepostal").val().length < 5)  {
            let message = "trop court";
            $("#message").show();
            $("#message").text(message);
        } 
    
        if ($("#codepostal").val().length > 5)  {
            let message = "trop long";            
            $("#message").show();
            $("#message").text(message);
        }

        if ($("#codepostal").val().length == 5)  {
            let message = "";
            $("#message").text("");
            $("#message").hide();
            const cp=$("#codepostal").val();

            $.ajax(
                {
                    "url" : "http://localhost:8080/formation/ville.php?codepostal="+cp,
                    "type" : "GET"
                }          
             // si cela se passe bien :    
             ).done(function(donnees) {
                console.log(donnees);
                $("#ville").val(donnees.nom);

             }).fail(function(){
                 console.log("OUPS");
             }).always(function(){
                 console.log("TOUJOURS");
             })   
             ;
        } 
    });

    // ajoute autant de champs textes que le nombre saisi dans le nombre de bateaux
    let nbbateauOld = 0;

    $("#nbbateau").change(function(){

        // récupération de la valeur saisie
        let nbbateau = $("#nbbateau").val();
        

        if (nbbateau < nbbateauOld) {       // 3 < 5

            for (let index = nbbateau ; index < nbbateauOld; index++){
                $("#bateau"+index).parent().parent().remove();

                console.log(index);
            }
        }


        for (let index = 0 ; index < nbbateau; index++){

            if ($("#bateau"+index).length == 0){
                //  let containerBateau = document.querySelector("containerBateau");  
                $("#containerBateau").append('<div class="form-group row"><label for="bateau'+index+'" class="col-sm-2">Longeur du bateau '+ index +'</label><div class="col-sm-10"><input type="texte" name="bateau'+index+'" id="bateau'+index+'" value=""> </div></div> ');
           }
           
        }

        // sauvegarde de la valeur saisie, dans un var tempo
        nbbateauOld = nbbateau;       

    });


    $("#page2Button").click(function(){

        const client = {};

        client.sexe = ($("#homme").val() == 0 ) ? "H"  : "F";
        client.nom = $("#nom").val();
        client.nomFemme = $("#nomFemme").val();
        client.prenom = $("#prenom").val();
        client.age = $("#age").val();
        client.codepostal = $("#codepostal").val();
        client.ville = $("#ville").val();

        client.interet = [];
        $("#interet").val().forEach( interet => {
            client.interet.push(interet);
        });

        client.nbbateau = [];        
        for (let index = 0 ; index < $("#nbbateau").val(); index++){
            client.nbbateau.push($("#bateau"+index).val());
        }
        console.log(client);

        $.ajax(
            {
                "url" : "http://localhost:8080/formation/register.php",
                "type" : "POST",
                "data" : { "user" : JSON.stringify(client) }
            } 
     
         // si cela se passe bien :    
         ).done(function(data) {

            

            // création d'un tableau dans une page 3 avec affichage des dossiers renvoyés par le serveur
            $("#page1").hide(); 
            $("#page2").hide(); 
            $("#page3").show(); 
            
            console.log(data);
            dossiers = JSON.parse(data);

            
            dossiers.forEach(dossier => {

                $("tbody").append("<tr><td>" + dossier.id 
                            + " </td><td>" + dossier.nom  + "(" + dossier.nomFemme + ")" 
                            + " </td><td>" + dossier.prenom   
                            + " </td><td>" + dossier.age    
                            + " </td><td>" + dossier.sexe    
                            + " </td><td>" + dossier.tailleBateau
                            + " </td><td>" + dossier.assurance  
                            + " </td><td>" + dossier.casse   
                            + " </td><td>" + dossier.statut   
                            + " </td><td>" + dossier.date.mday + " / " +     dossier.date.mon + " / " + dossier.date.year                
                            + " </td></tr>"
                );


            });
            console.log(dossiers[0].id);
            
           

            // on dessine le tableau
            let dessineTableau = function(client){
                console.log("..... " + client);

                let tbody = document.querySelector("tbody");  
                tbody.innerHTML="";  
                tbody.innerHTML += "<tr><td>" + user.id + "</td><td>" + user['nom'] + "</td><td>" + user['prenom'] + "</td><td>" + user['age'] + "</td><td>" + user['sexe'] + "</td></tr>";

               


              /*  for (let index =0 ; index < user.length; index++){
                    //const element = user[index];
                    //console.log(element);
                    tbody.innerHTML += "<tr><td>" + user.id + "</td><td>" + user['nom'] + "</td><td>" + user['prenom'] + "</td><td>" + user['age'] + "</td><td>" + user['sexe'] + "</td></tr>";
                }*/
            }
            dessineTableau(user);



         }).fail(function(){
            console.log("OUPS");
         }).always(function(){
            console.log("TOUJOURS");
         })   
         ;



    });


   


      

});