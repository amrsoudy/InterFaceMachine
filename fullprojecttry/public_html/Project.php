<?php
try {
	//Ouverture de la connexion à MySQL:
    $cnx = new PDO('mysql:host=localhost;dbname=db_amr', "root", "root");
	$requete = 'SELECT * FROM projects ';
	
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