let ataqueJugador 
let ataqueEnemigo
let VidasJugador = 3
let VidasEnemigo = 3

function iniciarJuego() { 
    let seleccionDeAtaque = document.getElementById("Selecciona un Ataque")
    seleccionDeAtaque.style.display= "none"

    let seccionReinciar = document.getElementById("Reiniciar")
    seccionReinciar.style.display= "none"


    let BTDJ = document.getElementById("btn_mascotas")
    BTDJ.addEventListener("click", selcciona_mascota)

    let btnFuego = document.getElementById("btn_Fuego")
    btnFuego.addEventListener("click", ataqueFuego)

    let btnAgua = document.getElementById("btn_Agua")
    btnAgua.addEventListener("click", ataqueAgua)
    
    let btnTierra = document.getElementById("btn_Tierra")
    btnTierra.addEventListener("click", ataqueTierra)

    let btnreiniciar = document.getElementById("btn_reiniciar")
    btnreiniciar.addEventListener("click", ReinciarJuego)
}

function selcciona_mascota(){

     let selccionDemascota= document.getElementById("Selecciona mascota")
     selccionDemascota.style.display= "none"

    let seleccionDeAtaque = document.getElementById("Selecciona un Ataque")
    seleccionDeAtaque.style.display= "block"


    let inputAgua = document.getElementById("Agua")
    let inputFuego = document.getElementById("Fuego")
    let inputTierra = document.getElementById("Tierra")
    let spanMascJugador = document.getElementById("mascota del jugador")
    
    if (inputAgua.checked){
        spanMascJugador.innerHTML="Agua"
    } else if (inputFuego.checked) {
        spanMascJugador.innerHTML="Fuego"
    } else if (inputTierra.checked) {
        spanMascJugador.innerHTML="Tierra"
    } else {
        alert("Selecciona una Mascota Primero")
    }
    SeleccionEnemiga()
}

function SeleccionEnemiga () {
    let mascotaEnemiga = eleccion_aleatria(1,3)
    let spanMascEnemiga = document.getElementById("mascota-enemiga")


    if (mascotaEnemiga == 1){
        spanMascEnemiga.innerHTML = "Agua"

    } else if (mascotaEnemiga == 2){
        spanMascEnemiga.innerHTML = "Tierra"

    } else if (mascotaEnemiga == 3){
        spanMascEnemiga.innerHTML = "Fuego"
         
    }
}


function ataqueFuego() {
    ataqueJugador = "Fuego"
    randomEnemiatack()

}function ataqueAgua() {
    ataqueJugador = "Agua"
    randomEnemiatack()

}function ataqueTierra() {
    ataqueJugador = "Tierra"
    randomEnemiatack()

}


function randomEnemiatack() {
    let ataqueAleatorio = eleccion_aleatria(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "Fuego"
    }else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "Agua"
    } else {
        ataqueEnemigo = "Tierra"
    }

    combate()
}


function combate () { 
    let spanvidasjugador = document.getElementById("Vidas-Jugador")
    let spanvidasenemigo = document.getElementById("Vidas-Enemigo")

    if(ataqueEnemigo == ataqueJugador){
    SMsataque("EMPATE")

    } else if (ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") {
      SMsataque ("GANASTE")
      VidasEnemigo--
      spanvidasenemigo.innerHTML = VidasEnemigo

    } else if(ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") {
      SMsataque ("GANASTE")
      VidasEnemigo--
      spanvidasenemigo.innerHTML = VidasEnemigo

    } else if(ataqueJugador == "Tierra" && ataqueEnemigo == "Agua") {
     SMsataque ("GANASTE")
     VidasEnemigo--
     spanvidasenemigo.innerHTML = VidasEnemigo

    } else {
       SMsataque ("PERDISTE")
       VidasJugador--
       spanvidasjugador.innerHTML = VidasJugador

    }
    
    revistavidas()

}
 function revistavidas () {

    if (VidasEnemigo == 0) {
            SMsresultadofinal("Ganste todas las rondas")
    } else if ( VidasJugador == 0 ) {
            SMsresultadofinal("Pediste todas las rondas")
    }
 }

                   
function SMsataque(resultado) {
     let sccmensajes = document.getElementById("Mensaje")

     let parrafo = document.createElement("p") 
     parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador  + ", El enemigo ataco con "+ ataqueEnemigo +  "-"  + resultado

     sccmensajes.appendChild(parrafo)
}

function SMsresultadofinal(resultadofinal) {
     let sccmensajes = document.getElementById("Mensaje")

     let parrafo = document.createElement("p") 
     parrafo.innerHTML = resultadofinal

     sccmensajes.appendChild(parrafo)

     let botondefuego = document.getElementById("btn_Fuego")
     botondefuego.disable = true
     let botondeagua = document.getElementById("btn_Agua")
     botondeagua.disable = true
     let botondetierra = document.getElementById("btn_Tierra")
     botondetierra = true

     let seccionReinciar = document.getElementById("Reiniciar")
    seccionReinciar.style.display= "block"

}

function ReinciarJuego () {
    location.reload()
}

function eleccion_aleatria(min,max)  {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}



window.addEventListener("load", iniciarJuego) 