addEventListener("DOMContentLoaded",inicio,false);

function inicio (){
    document.getElementById("formulario").addEventListener("submit",validar,false);
    const dad =document.getElementById("row-img");
    for(let elemento of dad.childNodes){
        if(elemento.nodeType==Node.ELEMENT_NODE)
            elemento.addEventListener("click",cambio,false);
    }
}
const validar = (evt)=>{
    evt.preventDefault();
    let datos = document.getElementById("formulario");
    let data = new FormData(datos);
    const contel=/[0-9]/;
    const conmail=/[.com$]/;
    if(data.get('nombre')==""||data.get('correo')==""||data.get('telefono')==""||data.get('mensaje')==""){
        document.getElementById("container-alerta").innerHTML="<div id='contenedor-texto'><p id='alerta'>Uno o mas campos estan vacios<p></div>";
        console.log("vacio");
    }else{
        if(conmail.test(data.get('correo'))){
            console.log("correo true");
            if(contel.test(data.get("telefono"))){
                console.log('telefono true');
                fetch('php/mail.php',{
                    method:'POST',
                    body:data
                })
                    .then(res => res.text())
                    .then(data=>{
                        data=="error"? document.getElementById("container-alerta").innerHTML="<div id='contenedor-texto'><p id='alerta'>Error al enviar mensaje<p></div>": document.getElementById("container-alerta").innerHTML="<div id='contenedor-texto'><p id='alerta'>Datos Enviados con exito<p></div>";
                    })
                


            }else{
                document.getElementById("telefono").focus();
                document.getElementById("container-alerta").innerHTML="<div id='contenedor-texto'><p id='alerta'>los valores ingresados en le campo telefono deben tener minimo 9 digitos<p></div>";
            }
        }else{
            document.getElementById("correo").focus();
            document.getElementById("container-alerta").innerHTML="<div id='contenedor-texto'><p id='alerta'>los valores ingresados en el campo correo no son validos<p></div>";
        }
    }
    
}
const cambio = ()=>{
    
    
} 
    
    
