//for the last tab lis all tasks connection

var xhr;
function charger() {
    var url = "tasks.php?";
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

            var reponse = JSON.parse(reponseJSON);
            if (reponse.length == 0) {
                document.getElementById("mainmain").innerHTML = "Aucun Tasks";
                return;
            } else {
                var i, s = "<li class='list-group-item list-group-item-warning'> TASK ID" + "  -    " + "TASK DESCRIPTION   " + "     -      " + "       PROJECT ID " + "     -      " + "  EMPLOYEE ID</li>";
                ;
                for (i = 0; prod = reponse[i]; i++) {
                    s += "<li class='list-group-item list-group-item-warning'>" + prod.TASKID + " - " + prod.TASKDESC + " - " + prod.PROJECTID + " - " + prod.EMPLOYEEID + "</li>";
                }
                document.getElementById("mainmain").innerHTML = s;
            }
        } else
        {
            alert("Problème : " + xhr.statusText);
        }
}
//from here i created the dynamic  divs 

count = 0;
count2 = 0;
function mouseover(x) {
    x.style.color = 'red';

}
;

function mouseout(x) {
    x.style.color = 'white';

}
;
function mouseoverfont(x) {
    x.style.fontSize = "30px";

}
;

function mouseoutfont(x) {
    x.style.fontSize = "16px";
    x.style.textAlign = "left";

}
;
function openproject() {
    document.getElementById("mainmain").innerHTML = "";

    var div_main = document.createElement('div');
    div_main.className = 'container';
    div_main.id = "div1";
    document.getElementById("mainmain").appendChild(div_main);



    var div_a1 = document.createElement('div');
    div_a1.className = 'row';
    div_main.appendChild(div_a1);


    var div_a2 = document.createElement('div');
    div_a2.className = 'col-lg-12 bg-warning text-center well-lg';
    div_a1.appendChild(div_a2);

    var p1 = document.createElement('p');
    p1.innerHTML = "Add Project";



    p1.style.color = "red";
    p1.style.fontSize = "25px";
    div_a2.appendChild(p1);


    var text1 = document.createElement('input');
    text1.type = "text";
    text1.name = "Projectid";
    text1.id = "projectid";
    text1.placeholder = "Project ID";
    text1.style.width = "300px";
    div_a2.appendChild(text1);

    var br = document.createElement('br');
    div_a2.appendChild(br);
    var br2 = document.createElement('br');
    div_a2.appendChild(br2);


    var text2 = document.createElement('input');
    text2.type = "text";
    text2.name = "ProjectName";
    text2.id = "projectname";
    text2.placeholder = "Name of the Project";
    text2.style.width = "300px";
    div_a2.appendChild(text2);

    var br = document.createElement('br');
    div_a2.appendChild(br);
    var br2 = document.createElement('br');
    div_a2.appendChild(br2);


    var text3 = document.createElement('input');
    text3.type = "text";
    text3.id = "startingdate";
    text3.name = "startDate";
    text3.placeholder = "Starting Date  yyyy-MM-dd";
    text3.style.width = "300px";
    div_a2.appendChild(text3);

    var br = document.createElement('br');
    div_a2.appendChild(br);
    var br2 = document.createElement('br');
    div_a2.appendChild(br2);


    var btu1 = document.createElement('input');
    btu1.type = "button";
    btu1.id = "btu1";
    btu1.name = "submit";
    btu1.value = "submit";
    btu1.style.width = "100px";
    btu1.onclick = function () {
        insertproject();
        return false;
    };
    div_a2.appendChild(btu1);

}
;

document.getElementById("btu1").onclick = function () {
    alert("Data Saved");
};



function openEmployee() {

    document.getElementById("mainmain").innerHTML = "";



    var div_main = document.createElement('div');
    div_main.className = 'container';
    div_main.id = "div2";

    document.getElementById("mainmain").appendChild(div_main);



    var div_a1 = document.createElement('div');
    div_a1.className = 'row';
    div_main.appendChild(div_a1);


    var div_a2 = document.createElement('div');
    div_a2.className = 'col-lg-12 bg-warning  text-center well-lg';
    div_a1.appendChild(div_a2);

    var p1 = document.createElement('p');
    p1.innerHTML = "Add Employee";
    p1.style.color = "red";
    p1.style.fontSize = "25px";
    div_a2.appendChild(p1);


    var text1 = document.createElement('input');
    text1.type = "text";
    text1.id = "employeeid";
    text1.name = "EmployyId";
    text1.placeholder = "Employee ID";
    text1.style.width = "300px";
    div_a2.appendChild(text1);

    var br = document.createElement('br');
    div_a2.appendChild(br);
    var br2 = document.createElement('br');
    div_a2.appendChild(br2);


    var text2 = document.createElement('input');
    text2.type = "text";
    text2.id = "employeename";
    text2.name = "EmployeeName";
    text2.placeholder = "Name of the Employee";
    text2.style.width = "300px";
    div_a2.appendChild(text2);

    var br = document.createElement('br');
    div_a2.appendChild(br);
    var br2 = document.createElement('br');
    div_a2.appendChild(br2);


    var text3 = document.createElement('input');
    text3.type = "text";
    text3.id = "startingdate";
    text3.name = "startDate";
    text3.placeholder = "Starting Date  yyyy-MM-dd";
    text3.style.width = "300px";
    div_a2.appendChild(text3);

    var br = document.createElement('br');
    div_a2.appendChild(br);
    var br2 = document.createElement('br');
    div_a2.appendChild(br2);


    var text4 = document.createElement('input');
    text4.type = "text";
    text4.id = "position";
    text4.name = "position";
    text4.placeholder = "position:Like  Mgr - Emp";
    text4.style.width = "300px";
    div_a2.appendChild(text4);

    var br = document.createElement('br');
    div_a2.appendChild(br);
    var br2 = document.createElement('br');
    div_a2.appendChild(br2);

    var btu1 = document.createElement('input');
    btu1.type = "button";
    btu1.name = "submit";
    btu1.value = "submit";
    btu1.style.width = "100px";
    btu1.onclick = function () {
        insertemployee();

        return false;
    };
    div_a2.appendChild(btu1);



}
;

function openTasks() {

    document.getElementById("mainmain").innerHTML = "";



    var div_main = document.createElement('div');
    div_main.className = 'container';
    div_main.id = "div2";

    document.getElementById("mainmain").appendChild(div_main);



    var div_a1 = document.createElement('div');
    div_a1.className = 'row';
    div_main.appendChild(div_a1);


    var div_a2 = document.createElement('div');
    div_a2.className = 'col-lg-12 bg-warning  text-center well-lg';
    div_a1.appendChild(div_a2);

    var p1 = document.createElement('p');
    p1.innerHTML = "Add Task";
    p1.style.color = "red";


    p1.style.fontSize = "25px";

    div_a2.appendChild(p1);


    var text1 = document.createElement('input');
    text1.type = "text";
    text1.id = "taskid";
    text1.name = "taskid";
    text1.placeholder = "Task ID";
    text1.style.width = "300px";
    div_a2.appendChild(text1);

    var br = document.createElement('br');
    div_a2.appendChild(br);
    var br2 = document.createElement('br');
    div_a2.appendChild(br2);


    var text2 = document.createElement('input');
    text2.type = "text";
    text2.id = "taskdesc";
    text2.name = "taskdesc";
    text2.placeholder = "Task description";
    text2.style.width = "300px";
    div_a2.appendChild(text2);

    var br = document.createElement('br');
    div_a2.appendChild(br);
    var br2 = document.createElement('br');
    div_a2.appendChild(br2);


    var text3 = document.createElement('input');
    text3.type = "text";
    text3.id = "projid";
    text3.name = "projectid";
    text3.placeholder = "Project Id";
    text3.style.width = "300px";
    div_a2.appendChild(text3);

    var br = document.createElement('br');
    div_a2.appendChild(br);
    var br2 = document.createElement('br');
    div_a2.appendChild(br2);


    var text4 = document.createElement('input');
    text4.type = "text";
    text4.id = "empid";
    text4.name = "Empid";
    text4.placeholder = "Employee Id";
    text4.style.width = "300px";
    div_a2.appendChild(text4);

    var br = document.createElement('br');
    div_a2.appendChild(br);
    var br2 = document.createElement('br');
    div_a2.appendChild(br2);

    var btu1 = document.createElement('input');
    btu1.type = "button";
    btu1.name = "submit";
    btu1.value = "submit";
    btu1.style.width = "100px";
    btu1.onclick = function () {
        inserttask();
        return false;
    };
    div_a2.appendChild(btu1);



}
;
function insertproject() {
    var projectid = document.getElementById("projectid").value;
    var projectname = document.getElementById("projectname").value;
    var startingdate = document.getElementById("startingdate").value;



    var url = "insertproject.php?projectid=" + projectid + "&projectname=" + projectname + "&startingdate=" + startingdate;
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = traiterReponse2;
    try
    {
        xhr.open("GET", url, true);
    } catch (e)
    {
        alert(e);
    }
    xhr.send(null);
}
function traiterReponse2()
{
    if (xhr.readyState == 4) //complété
        if (xhr.status == 200)  //réponse OK
        {
            var reponseJSON = xhr.responseText;
            var rep = JSON.parse(reponseJSON);
            if (rep.reponse == 0) { //Aucun produit ajouté
                alert('insertion échouée');
            } else {
                alert('insertion réussie');
            }
        } else
        {
            alert("Problème : " + xhr.statusText);
        }
}
;

function insertemployee() {
    var employeeid = document.getElementById("employeeid").value;
    var employeename = document.getElementById("employeename").value;
    var startingdate = document.getElementById("startingdate").value;
    var position = document.getElementById("position").value;




    var url = "insertemployee.php?employeeid=" + employeeid + "&employeename=" + employeename + "&startingdate=" + startingdate + "&position=" + position;
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = traiterReponse3;
    try
    {
        xhr.open("GET", url, true);
    } catch (e)
    {
        alert(e);
    }
    xhr.send(null);
}
;
function traiterReponse3()
{
    if (xhr.readyState == 4) //complété
        if (xhr.status == 200)  //réponse OK
        {
            var reponseJSON = xhr.responseText;
            var rep = JSON.parse(reponseJSON);
            if (rep.reponse == 0) { //Aucun produit ajouté
                alert('insertion échouée');
            } else {
                alert('insertion réussie');
            }
        } else
        {
            alert("Problème : " + xhr.statusText);
        }
}
;


function inserttask() {
    var taskid = document.getElementById("taskid").value;
    var taskdesc = document.getElementById("taskdesc").value;
    var projid = document.getElementById("projid").value;
    var empid = document.getElementById("empid").value;




    var url = "inserttask.php?taskid=" + taskid + "&taskdesc=" + taskdesc + "&projid=" + projid + "&empid=" + empid;
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = traiterReponse4;
    try
    {
        xhr.open("GET", url, true);
    } catch (e)
    {
        alert(e);
    }
    xhr.send(null);
}
;
function traiterReponse4()
{
    if (xhr.readyState == 4)
        if (xhr.status == 200)
        {
            var reponseJSON = xhr.responseText;
            var rep = JSON.parse(reponseJSON);
            if (rep.reponse == 0) {
                alert('insertion échouée');
            } else {
                alert('insertion réussie');
            }
        } else
        {
            alert("Problème : " + xhr.statusText);
        }
}
;
function openPar() {

    document.getElementById("mainmain").innerHTML = "";
    document.getElementById('lab1').style.display = 'none';
    document.getElementById('lab2').style.display = 'none';
    document.getElementById('lab3').style.display = 'none';
    document.getElementById('sel1').style.display = 'none';
    document.getElementById('sel2').style.display = 'none';
    document.getElementById('sel3').style.display = 'none';




    document.getElementById('id01').style.display = 'block';




}
;
function changeMenu() {

    document.getElementById('lab1').style.display = 'block';
    document.getElementById('sel1').className = "selectpicker";
    document.getElementById('sel1').style.display = 'block';



}