//WHERE USERNAME = '.$_GET['username'].' AND PASSWORD = '.$_GET['pass']
		 //username="+u+"&pass="+p
			var xhr;
			function login(){
				var u = document.getElementById("username").value;
				var p = document.getElementById("pass").value;
				
				var url = "users.php?username='"+u+"'&pass='"+p+"'";
			
				xhr = new XMLHttpRequest();
				xhr.onreadystatechange = traiterReponse;
				try
				{
					xhr.open("GET",url,true);
				}
				catch (e)
				{
				  alert(e);
				}
				xhr.send(null);
			}
			function traiterReponse()
			{
			  if (xhr.readyState == 4) 
				if (xhr.status == 200)  
				{
				  var reponseJSON = xhr.responseText;
                                  alert(reponseJSON);
				  var reponse = JSON.parse(reponseJSON);

				  
				  if (reponse.length == 0) { 
					alert("verify your username or password please");
					return;
				  }
				  else {
				  alert("welcome ")
					
					document.getElementsByTagName("body")[0].innerHTML = window.open("Main.html", "_self");
				  }
				}
				else
				{
				  alert("Problème : "+xhr.statusText);
				}
			}
					
