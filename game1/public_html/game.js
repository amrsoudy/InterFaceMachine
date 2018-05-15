/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var bx = 3;
var by = 3;
var x;
var y;

var timer, i, divide;
i = 0;
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
   
    if (i === 0) {

        //alert("one");
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
            alert("Congratulation" +"  "+(i/divide));

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
function stop(){
    clearInterval(timer);
    timer = null ;
  
}

