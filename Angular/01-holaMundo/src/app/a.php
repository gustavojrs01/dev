<?php 

	$variable = 1000;
	$nombre = "gustavo";

	$datos=array(
	"estado"=>"ok",
	"variable"=>$variable,
	"nombre"=>$nombre
	);

	echo json_encode($datos, JSON_FORCE_OBJECT);



?>
