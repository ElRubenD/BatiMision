let sonidoBatman = document.querySelector(".bati_encendido");
let sonidoBoton = document.querySelector(".bati_click");

let batman = document.querySelector(".batman");
let batmanBoton = document.querySelector(".bati_boton");

let estadoLinterna = "apagado";

//evento

batmanBoton.addEventListener("click",controlarLinterna)

//funciones

function controlarLinterna(){
    if (estadoLinterna == "apagado"){
        estadoLinterna = "encendido";
        /*efecto de sonido*/
        batman.classList.add("batman_activo");
        sonidoLinterna();
    } else {
        estadoLinterna = "apagado";
        /*efecto de sonido*/
        batman.classList.remove("batman_activo");
        sonidoLinterna();
    }
}

function sonidoLinterna(){
    /*paused verifica que este pausado el sonido , es distinto a pause que lo pausa*/
    if(sonidoBatman.paused){
        sonidoBoton.play();
        sonidoBatman.play();
    } else {
        sonidoBoton.play();
        sonidoBatman.pause();
    }
}