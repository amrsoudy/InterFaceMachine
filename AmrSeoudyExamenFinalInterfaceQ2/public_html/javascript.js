/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var listeMonnaies = [{nom: "Euro", valeur: 10.5}, {nom: "US", valeur: 5}, {nom: "Livre", valeur: 2}];
window.onload = function () {
    getNomsMonnaies();
};

function getNomsMonnaies() {

    var tab = [];

    for (var i = 0; i < listeMonnaies.length; i++) {

        tab.push(listeMonnaies[i].nom);

    }
    var x = document.getElementById("selected");
    for (var i = 0; i < tab.length; i++) {

        var option = document.createElement("option");
        option.text = tab[i];
        x.add(option);

    }

}



function getTaux(value) {

    for (var i = 0; i < listeMonnaies.length; i++) {

        if (listeMonnaies[i].nom == value) {

            need2 = listeMonnaies[i].valeur;
        }


    }


    return need2;

}


document.getElementById("conv").onclick = function () {
    calcul();
};

function calcul() {
    var mountant = document.getElementById("nb1").value;
    var x = document.getElementById("selected");
    var value = x.options[x.selectedIndex].value;
    var need;
    // alert(value);

    need = getTaux(value);



    document.getElementById("res").value = (mountant * need);




}
