/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
            var myTime;
            var count = 0;
            var tabImages;
            var state = false;
            var visibleImagesNo = [];
            var tabd = [];
            document.getElementsByTagName("input")[0].onclick = function () {
                newImages();
            };
            document.getElementsByTagName("input")[1].onclick = function () {
                cacherImages();
            };
            document.getElementsByTagName("input")[2].onclick = function () {
                showImages();
            };

            function newImages() {
                state = true;
                visibleImagesNo = [];
                no = 0 ;

                tabImages = document.images;
                for (var i = 0; i < 36; i++) {

                    tabImages[i].style.visibility = 'visible';
                    tabImages[i].src = "./images/im" + i + ".jpg";
                    if (i > 9) {
                        tabImages[i].src = "./images/im" + (i - 10) + ".jpg";
                        if (i > 19) {

                            tabImages[i].src = "./images/im" + (i - 20) + ".jpg";
                            if (i > 27) {
                                tabImages[i].src = "./images/im" + (i - 28) + ".jpg";

                            }
                        }
                    }
                }
                count++;
                clearTimeout(myTime);
                myTime = setTimeout("cacherImages()", 5000);
                if (count > 1) {

                    clearTimeout(myTime);
                    shuffel(tabImages);
                    myTime = setTimeout("cacherImages()", 5000);

                }


            }

            function cacherImages() {


                if (visibleImagesNo.length == 0) {
                    for (var d = 0; d < 36; d++) {

                        tabImages[d].style.visibility = 'hidden';
                    }

                } else {

                    // alert(visibleImagesNo);
                    for (var d = 0; d < 36; d++) {
                        for (var u = 0; u < visibleImagesNo.length; u++) {
                            if (d !== visibleImagesNo[u]) {
                                tabImages[d].style.visibility = 'hidden';

                            } else if (d == visibleImagesNo[u]) {
                                //  alert(num1+ "   " +num2);
                                tabd.push(d);

                            }

                            for (var w = 0; w < tabd.length; w++) {
                                tabImages[tabd[w]].style.visibility = 'visible';

                            }
                        }


                    }
                }

                for (var e = 1; e < 37; e++) {
                    document.getElementsByTagName("td")[e].addEventListener("click", match);


                }

            }

            function showImages() {

                clearTimeout(myTime);
                myTime = setTimeout("cacherImages()", 5000);

                for (var i = 0; i < 36; i++) {
                    tabImages[i].style.visibility = 'visible';

                }
                for (var e = 1; e < 37; e++) {
                    if (tabImages[a].style.visibility == "hidden") {
                        document.getElementsByTagName("td")[e].removeEventListener("click", match);
                    }

                }


            }

            function  shuffel(tabImages) {

                var currentIndex = tabImages.length, tempval, randIndex;

                while (currentIndex != 0) {

                    randIndex = Math.floor(Math.random() * currentIndex);
                    // alert(randIndex);
                    currentIndex -= 1;

                    tempval = tabImages[currentIndex].src;
                    tabImages[currentIndex].src = tabImages[randIndex].src;
                    tabImages[randIndex].src = tempval;


                }
                alert("Melangé");
                for (var e = 1; e < 37; e++) {
                    document.getElementsByTagName("td")[e].removeEventListener("click", match);


                }

            }
            var number = 0;
            var un;
            var deux;
            var num1;
            var num2;
            var no = 0;


            function match() {
                number++;
                // alert(number);
                clearTimeout(myTime);


                if (number == 1) {

                    switch (this.parentNode.rowIndex - 1) {
                        case 0:
                            num1 = this.cellIndex;
                            break;
                        case 1:
                            num1 = (6 + this.cellIndex);
                            break;
                        case 2 :
                            num1 = (12 + this.cellIndex);
                            break;
                        case 3 :
                            num1 = (18 + this.cellIndex);
                            break;
                        case 4 :
                            num1 = (24 + this.cellIndex);
                            break;
                        case 5 :
                            num1 = (30 + this.cellIndex);
                            break;

                    }

                    tabImages[num1].style.visibility = "visible";

                    un = tabImages[num1].src;
                    //alert("un       " + un);


                } else if (number == 2) {

                    switch (this.parentNode.rowIndex - 1) {
                        case 0:
                            num2 = this.cellIndex;
                            break;
                        case 1:
                            num2 = (6 + this.cellIndex);
                            break;
                        case 2 :
                            num2 = (12 + this.cellIndex);
                            break;
                        case 3 :
                            num2 = (18 + this.cellIndex);
                            break;
                        case 4 :
                            num2 = (24 + this.cellIndex);
                            break;
                        case 5 :
                            num2 = (30 + this.cellIndex);
                            break;

                    }
                    if (num1 !== num2) {


                        tabImages[num2].style.visibility = "visible";

                        deux = tabImages[num2].src;
                        number = 0;
                        setTimeout("verifi(un,deux)", 1000);
                    } else if (num1 == num2) {

                        for (var d = 0; d < 36; d++) {
                            for (var u = 0; u < visibleImagesNo.length; u++) {
                                if (d !== visibleImagesNo[u]) {
                                    tabImages[d].style.visibility = 'hidden';

                                } else if (d == visibleImagesNo[u]) {
                                    //  alert(num1+ "   " +num2);
                                    tabd.push(d);

                                }

                                for (var w = 0; w < tabd.length; w++) {
                                    tabImages[tabd[w]].style.visibility = 'visible';

                                }
                            }


                        }

                        //  tabImages[num2].style.visibility = "hidden";
                        number = 0;

                    }
                }


            }
            function verifi(un, deux) {

                if (un !== deux) {
                    //
                    tabImages[num1].style.visibility = "hidden";

                    //  alert(un);
                    tabImages[num2].style.visibility = "hidden";
                    // alert(deux);

                } else if (un === deux) {

                    visibleImagesNo.push(num1);
                    visibleImagesNo.push(num2);
                    no++;
                    if (no > 18){
                        alert("you already Finished and you did win make new game ");
                        
                        
                    }
                }
               // alert(no);

             //   for (var a = 0; a < 36; a++) {


                   if (no == 18) {

                        alert("you Win Congratulation");
                   }
//

              //  }

            }

            function wait(ms) {


                var start = new Date().getTime();
                var end = start;
                while (end < start + ms) {
                    end = new Date().getTime();


                }

            }



