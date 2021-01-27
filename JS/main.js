$(function(){
    $("#texto-galeria").mouseover(function(){
        $(this).css("color","red");
    });
    $("#texto-galeria h1").mouseover(function(){
        $(this).text("GALERIA SERVICIOS");
    })
    $("#texto-galeria h1").mouseout(function(){
        $(this).text("EJECUCION DE OBRAS CIVILES");
    })
    /*
    var url;
    var titulo;
    $(".contenedor-galeria .galeria").append("<div id='galeria-total'><figure><figcaption></figcaption></figure></div>");
    $(".galeria").mouseenter(function(){
        url=$(this).find("img").attr("src");//recuperar datos
        titulo=$(this).find("img").attr("titulo");//recuperar datos
        //$("#galeria-total figure").append("<img src'"+url+"'>");
        console.log(titulo);
        console.log(url);
    })
*/
 /*  $(".galeria-fondo .icon-search").click(function(){
        $("#galeria-total").css("display","block");
        $("#galeria-total").mouseenter(function(e){
        e.preventDefault(); 
        $(".galeria #galeria-total figure").prepend("<img src="+url+">");
        $(".galeria #galeria-total figure figcaption").prepend("<h2>"+titulo+"</h2>");
       
        })
    })*/

    var nombre;

    $(".galeria").mouseenter(function(){
        nombre=$(this).find("img").attr("titulo")
        console.log(nombre);
    })
    $(".galeria .galeria-fondo").append("<p></p>")
    $(".galeria .galeria-fondo").mouseenter(function(){
    $(this).find("p").show().text(nombre).css("font-size","20px");    
    })
   // $("#fondo-movil").css("height",screen.height)
    //console.log(screen.height);

    var largo = window.innerHeight;
    console.log(largo);
    $("#fondo-movil").css("height",largo)
    $(".container-quines").css("height",largo)
    
    $(".ret").mouseenter(function(){
        ruta = $(this).find("img").attr("ruta")
        console.log(ruta);
       $(".ret").find("img").click(()=>{
           $("#somos img").attr("src",ruta)
        })
    })
  
})

addEventListener("DOMContentLoaded",inicio,false);
var intervalo;
function inicio(){
    intervalo = setInterval(cambiaimg,5000);
}
let cont=1;
let ruta;
function cambiaimg(){
    if(cont<=5){
        ruta='IMG/big'+cont+'.jpg';
        cont++;
        }else{
            cont=1;
        }
    let dad = document.getElementById("somos");
    dad.removeChild(dad.firstChild);
    let son = document.createElement("img");
        son.src=ruta;
        dad.appendChild(son);
        console.log(ruta);
      
    }


