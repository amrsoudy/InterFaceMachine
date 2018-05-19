/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


 window.onload;

            var i = 7;
            var myval = setInterval("f()", 1000);

            function f() {
                var temp;
                var temp1;

                temp = document.getElementsByName("im" + 7)[0].src;//7
                temp1 = document.getElementsByName("im" + 1)[0].src;

                if (i >= 1) {


                    document.getElementsByName("im" + 1)[0].src = temp; //1 = //7 

                    for (var h = 7; h > 1; h--) {
                        if (h == 2) {
                            document.getElementsByName("im" + h)[0].src = temp1;

                        } else {

                            document.getElementsByName("im" + h)[0].src = document.getElementsByName("im" + (h - 1))[0].src;//7 ==6  // 2 = 1
                        }


                    }

                    i--;

                } else {


                    i = 7;

                }



            }

