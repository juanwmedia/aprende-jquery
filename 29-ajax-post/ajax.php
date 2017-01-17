<?php
header('Access-Control-Allow-Origin: *');
if (isset($_POST['nombre']) && !empty($_POST['nombre'])
	&& isset($_POST['mensaje']) && !empty($_POST['mensaje'])) {
	$datos = Array();
	$nombre = htmlspecialchars($_POST['nombre'],ENT_QUOTES);
	$mensaje = htmlspecialchars($_POST['mensaje'],ENT_QUOTES);
	$fecha = getdate();
	$datos['nombre'] = $nombre;
	$datos['mensaje'] = $mensaje;
	$datos['fecha'] = $fecha;
	echo json_encode($datos);
}