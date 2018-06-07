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

    charger();


}


var xhr;
function charger() {
    var url = "monnaies.php?";
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = traiterReponse6;
    try
    {
        xhr.open("GET", url, true);
    } catch (e)
    {
        alert(e);
    }
    xhr.send(null);
}
function traiterReponse6()
{
    if (xhr.readyState == 4)
        if (xhr.status == 200)
        {
            var reponseJSON = xhr.responseText;
            alert(reponseJSON);
            var reponse = JSON.parse(reponseJSON);
            alret(reponse);
            if (reponse.length == 0) {
                document.getElementById("mainmain").innerHTML = "Aucun Tasks";
                return;
            } else {
                var i, s = "<li class='list-group-item list-group-item-warning'> TASK ID" + "  -    " + "TASK DESCRIPTION   " + "     -      " + "       PROJECT ID " + "     -      " + "  EMPLOYEE ID</li>";
                ;
                for (i = 0; prod = reponse[i]; i++) {
                    s += "<li class='list-group-item list-group-item-warning'>" + prod.TASKID + " - " + prod.TASKDESC + " - " + prod.PROJECTID + " - " + prod.EMPLOYEEID + "</li>";
                }
                document.getElementById("mainmain").innerHTML = s;
            }
        } else
        {
            alert("Problème : " + xhr.statusText);
        }
}