/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var count = 0;

document.getElementsByTagName('button')[0].addEventListener('click',ActiveDesActive );

function ActiveDesActive() {

    count++;
    if (count === 1) {
        alert("all links DisActivated");

        var all = document.getElementsByTagName("a");
        for (var i = 0; i < all.length; i++) {

            all[i].onclick = function fun() {
                return (false);

            };

        }


    } else if (count === 2) {
        alert("All Links  Activated ");
        count = 0;
        var all = document.getElementsByTagName("a");
        for (var i = 0; i < all.length; i++) {

            all[i].onclick = function fun() {
                return (true);

            };


        }

    }


}



