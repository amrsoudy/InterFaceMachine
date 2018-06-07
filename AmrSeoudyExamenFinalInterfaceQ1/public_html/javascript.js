/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.getElementById("conv").onclick = function (){calcul();};
function calcul() {
    var mountant = document.getElementById("nb1").value;
    var x = document.getElementById("selected");
    var value = x.options[x.selectedIndex].value;
    var need;


    switch (value) {

        case "Euro":
            need = 10.5;
            break;
        case "US":
            need = 5;
            break;
        case "Livre":
            need = 2;
            break;

    }
    
    document.getElementById("res").value = (mountant * need);




}
