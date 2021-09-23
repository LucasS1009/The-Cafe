<?php
$mysqli = new mysqli("db", "root", "root", "cafe");
if($mysqli->connect_error) {
  exit('Could not connect');
}
$tableau = explode(",", $_GET['q']);


$stmt = $mysqli->prepare("INSERT INTO reservation (nom, nombre_de_personne, date, heure, message) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_Param("sisss", $tableau[0], $tableau[1], $tableau[2], $tableau[3], $tableau[4]);

$stmt->execute();

var_dump($mysqli->error);

$stmt->close();
$mysqli->close();

die("stop");
