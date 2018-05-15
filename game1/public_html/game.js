/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Amr seoudy Comment JavaScript Tutorial - Timers - Making a Stopwatch  vidion dans youtube

document.getElementsByTagName("button")[0].addEventListener('click', mix);
var bx = 3;
var by = 3;
var t = 0;


function mix() {


    for (var h = 0; h < 9; h++) {
        var randx = Math.floor(Math.random() * 3 + 1);
        var randy = Math.floor(Math.random() * 3 + 1);
        var rand1 = Math.floor(Math.random() * 3 + 1);
        var rand2 = Math.floor(Math.random() * 3 + 1);


        var TemElement = document.getElementsByName("im" + rand1 + rand2)[0].src;

        document.getElementsByName("im" + rand1 + rand2)[0].src = document.getElementsByName("im" + randx + randy)[0].src;


        document.getElementsByName("im" + randx + randy)[0].src = TemElement;


    }
    var tableImages = [];
    for (i = 0; i < 9; i++) {
        var tab = document.images[i].src;
        var TempTable = tab.split("/");
        var valuer = TempTable[TempTable.length - 1];


        if (valuer === "Blanc.gif") {

            switch (i + 1) {

                case 1 :
                    bx = 1;
                    by = 1;
                    break;

                case 2 :
                    bx = 1;
                    by = 2;

                    break;
                case 3 :
                    bx = 1;
                    by = 3;
                    break;
                case 4 :
                    bx = 2;
                    by = 1;
                    break;
                case 5 :
                    bx = 2;
                    by = 2;

                    break;
                case 6 :
                    bx = 2;
                    by = 3;

                    break;
                case 7 :
                    bx = 3;
                    by = 1;
                    break;
                case 8 :
                    bx = 3;
                    by = 2;
                    break;
                case 9 :
                    bx = 3;
                    by = 3;
                    break;


            }

            //alert(bx + "" + by);
            
        }


    }


}

t =0 ;
var x;
var y;

var timer, i, divide;
divide = 100;



var tabFinal = [
    "Image1.gif",
    "Image2.gif",
    "Image3.gif",
    "Image4.gif",
    "Image5.gif",
    "Image6.gif",
    "Image7.gif",
    "Image8.gif",
    "Blanc.gif"
];


function f(x, y) {
   // alert(x + "" + y);
  //  alert(t);

    if (t === 0) {

        start();

    }



    var TempScr = document.getElementsByName("im" + x + y)[0].src;
    var TempBlancSrc = document.getElementsByName("im" + bx + by)[0].src;

    if (((x === bx) && (y === by - 1 || y === by + 1)) || ((y === by) && (x === bx - 1 || x === bx + 1))) {
        document.getElementsByName("im" + x + y)[0].src = TempBlancSrc;
        document.getElementsByName("im" + bx + by)[0].src = TempScr;
        tempx = x;
        tempy = y;
        x = bx;
        y = by;
        bx = tempx;
        by = tempy;

        var tabcourent = [];


        for (i = 0; i < 9; i++) {
            var tab = document.images[i].src;
            var TempTab = tab.split("/");
            tabcourent.push(TempTab[TempTab.length - 1]);

        }

        var bool = tabcourent.every(function (element, index) {
            return element === tabFinal[index];
        });

        if (bool === true) {
            stop();
            alert("Congratulation" + "  " + ((i / divide)));

        }


    }


}

function start() {
    timer = this.setInterval("increment()", (1000 / divide));

}

function increment() {
    i++;
    document.getElementById("Temps").innerHTML = (i / divide);

}
function stop() {
    clearInterval(timer);
    timer = null;

}

