<?php
$nombre=$_POST['nombre'];
$email=$_POST['correo'];
$telefono=$_POST['telefono'];
$mensaje=$_POST['mensaje'];

if($nombre!=""&&$mail!=""&&$telefono!=""){
    $destino="";
    $asunto="mensaje web drycons peru";
    $mensaje2="Nombre: ".$nombre."<br>"."Correo".$email."<br>"."Telefono".$telefono."<br>".$mensaje;
    if(mail($destino,$asunto,$mensaje2,$nombre)){
        echo "enviado";
    }else{
        echo "error";
    }
}
?>