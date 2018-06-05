<?php
//require_once 'Produit.php';
//require_once 'Facture.php';
try {
	//Ouverture de la connexion à MySQL:
    $cnx = new PDO('mysql:host=localhost;dbname=db_amr', "root", "root");
	if (isset($_GET['taskid']) ) {
		$requete = "INSERT INTO TASKS (TASKID,TASKDESC,PROJECTID,EMPLOYEEID)".
				" VALUES ('".$_GET['taskid']."','".$_GET['taskdesc']."','".$_GET['projid']."','".$_GET['empid']."')";
		$nb = $cnx->exec($requete);
		if ($nb === FALSE) {
			$rep = "{\"reponse\":0}";
		}
		else {
			$rep = "{\"reponse\":".$nb."}";
		}		
	}
	else {
		$rep = "{\"reponse\":0}";
	}
    $cnx = null;
	echo $rep;	//"Bonjour tout le <b>monde</b>";//$s;
} catch (PDOException $e) {
	echo "{\"reponse\":0}";
}
