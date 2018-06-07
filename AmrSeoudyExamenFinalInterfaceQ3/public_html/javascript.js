/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function () {
      charger();
};

var tab = [];
var tab2 =[];
function getNomsMonnaies() {


  
    var x = document.getElementById("selected");
    for (var i = 0; i < tab.length; i++) {

        var option = document.createElement("option");
        option.text = tab[i];
        x.add(option);

    }

}


var need2 ;
function getTaux(value) {

    for (var i = 0; i < tab2.length; i++) {
		
        if (tab[i] == value) {
			
            need2 = tab2[i].VALEUR;
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

    need = getTaux(value);




    document.getElementById("res").value = (mountant * need);

  


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
            //alert(reponseJSON);
            var reponse = JSON.parse(reponseJSON);
            if (reponse.length == 0) {
               alert("il ya pas chois ");
            } else {
				
                
                for (var i = 0; prod = reponse[i]; i++) {
					tab.push(prod.NOM);
					tab2.push(prod);
					
                }
                getNomsMonnaies();
            }
        } else
        {
            alert("Problème : " + xhr.statusText);
        }
}