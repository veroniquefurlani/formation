
$(document).ready(function(){

    // code à exécuter quand la page a été totalement dessinée

    //let tbody = document.querySelector('tbody');
    let tbody = $('tbody');
    console.log(tbody.val());

    let name = $('#name');
    console.log(name.val());
    name.val("Nouveau nom");



})
