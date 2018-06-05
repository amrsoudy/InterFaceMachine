<?php
try {
	//Ouverture de la connexion à MySQL:
    $cnx = new PDO('mysql:host=localhost;dbname=db_amr', "root", "root");
	if (!isset($_GET['username']) || !isset($_GET['pass'])) {//pas de paramètre pmin fourni dans la requete HTTP
		$requete = 'SELECT * FROM users ';
	}
	else {
		$requete = 'SELECT * FROM users WHERE USERNAME = '.$_GET['username'].' AND PASSWORD = '.$_GET['pass'];
	}
	$res = $cnx->query($requete);
	$res->setFetchMode(PDO::FETCH_OBJ);
	$s = "[";
	while ($row = $res->fetch()) {
	  if ($s!="[") {
		$s .= ",";
	  }
	  $s = $s.json_encode($row);
    }
	$s .= "]";
	$res->closeCursor();
    $cnx = null;
	echo $s;	
} catch (PDOException $e) {
	echo "[]";
}
?>