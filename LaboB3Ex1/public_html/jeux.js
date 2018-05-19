/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


       var myval;
            TabImg = new Array();
            var NbImages = 10;
            //On range NbImages images gif dans le tableau TabImg :
            for (i = 0; i < NbImages; i++)
            {
                TabImg[i] = new Image();
                TabImg[i].src = "./images/image" + i + ".GIF";
            }

            var imageActuelle = 0;
            function setImage(i)
            {
                document.images["MonImage"].src = TabImg[i].src;
            }
            var count = 0;
            imageActuelle = 0;
            function f() {

                count++;
                if (count == 1) {
                    if (imageActuelle != 0) {
                        setImage(imageActuelle);
                        anime();

                    }
                    setImage(imageActuelle);
                    clearTimeout(myval);
                    anime();
                } else if (count == 2) {
                    clearTimeout(myval);
                    myval = setTimeout("anime()", 1000);

                    count = 0;


                }


            }



            function anime()
            {
                setImage(imageActuelle);
    clearTimeout(myval);

                imageActuelle++;
                if (imageActuelle == NbImages)
                    imageActuelle = 0;
            
                myval = setTimeout("anime()", 1000);



            }

            function stop() {
                // setImage(imageActuelle);


                clearTimeout(myval);
            }



