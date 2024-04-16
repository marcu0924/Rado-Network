<?php

$servername = "localhost";
$dBUsername = "test";
$dBPassword = "test09240924";
$dBName = "mainDB";


$conn = mysqli_connect($servername, $dBUsername, $dBPassword, $dBName);
mysqli_query($conn, "SELECT * FROM users");

if (!$conn) {
	die("Connection failed: ".mysqli_connect_error());
}