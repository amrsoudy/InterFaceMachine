/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
    document.getElementsByTagName('button')[0].addEventListener('click',returnall );


function f(x) {

    x.style.display = 'none';

}


function returnall() {

    var x = document.getElementsByTagName("P");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'block';
    }

}

