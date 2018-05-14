
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
