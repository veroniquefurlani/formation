// declaration de l'objet général
let utilisateurs = [];

function edit(id){
    console.log("j'édite l'utilisateur : " + id);
    
    $("#name").val(utilisateurs[id].nom);
    $("#firstname").val(utilisateurs[id].prenom);
    $("#age").val(utilisateurs[id].age);

    // puisque l'on est en mode "modifier", on modifie la valeur (-1) du champ hidden, par l'index (donc id) de l'item à modifier
    $("#editIndex").val(id);

}

$(document).ready(function(){

    // declaration des objets
    let felix = { "nom":"sportelli", "prenom":"felix", "age":32 };
    let aurelie = { "nom":"sportelli", "prenom":"aurelie", "age":31 };
    utilisateurs.push(felix);
    utilisateurs.push(aurelie);    


    let dessineTableau = function(utilisateurs){
        let tbody = $("tbody");  
        tbody.empty();
        tbody.innerHTML="";  
        for (let index =0 ; index < utilisateurs.length; index++){
            const element = utilisateurs[index];
            //console.log(element);
            tbody.append("<tr><td>" + element.nom + "</td><td>" + element.prenom + "</td><td>" + element.age + "</td><td><i class='material-icons' onClick=edit(" + index + ")>border_color</i></td></tr>");
        }
    }
    dessineTableau(utilisateurs);















    //let tbody = document.querySelector('tbody');
    let tbody = $('tbody');
    console.log(tbody.val());

    let name = $('#name');
    console.log(name);


    // $("table").hide();
    $(".impair").addClass("rouge");
    $("tbody tr:nth-child(2n+1)").addClass("sousligne");
    
    $("thead").addClass("cache");
    $("thead").removeClass("cache");

    $("#purgeHeader").click(function(){       
        // si thead est visible => le cacher
        // sinon l'afficher

        if ($("thead").hasClass("cache"))
            $("thead").removeClass("cache");
        else 
            $("thead").addClass("cache");
    });

    // supprime la première ligne
    $("#purgeHeader2").click(function(){     
        $("tbody tr:first-child").remove(); 
    });


    // vide/supprime/ajoute dans tbody
    $("#purgeTBody").click(function(){     
        //$("tbody").remove(); // supprime tbody
        //$("tbody").empty(); // vide tbody
        $("tbody").append("<tr><td>SPORTELLI</td><td>ABC</td><td>123</td></tr>"); // ajoute en fin de tableau
        $("tbody").prepend("<tr><td>SPORTELLI</td><td>TRE</td><td>564</td></tr>"); // ajoute à la première ligne
    });


    function resetForm(){

        $("#name").val("");
        $("#firstname").val("");
        $("#age").val("");
        $("#editIndex").val(-1);  
    }

    // ajoute dynamiquement
    $("#addButton").click(function(){
        newUser = {};
        newUser.nom = $("#name").val();
        newUser.prenom = $("#firstname").val();
        newUser.age = $("#age").val();

        const index = $("#editIndex").val();  

        if (index == -1) {
            // en mode "edition"
            utilisateurs.push(newUser);
            resetForm();
        } else  { 
            // en mode "création"
            utilisateurs[index].nom = $("#name").val();
            utilisateurs[index].prenom = $("#firstname").val();
            utilisateurs[index].age = $("#age").val();
            resetForm();
        }
        dessineTableau(utilisateurs);       
    });








})
