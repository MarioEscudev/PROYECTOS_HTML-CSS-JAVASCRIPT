let estadoLicuadora = "apagada";
let sonidoLicuadora = document.getElementById("blender-sound");
let botonLicuadora = document.getElementById("blender-button-sound");
let licuadora = document.getElementById("blender");

function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendido";
        hacerBrbrbr();
        licuadora.classList.add("active");
        /* console.log("me prendiste"); */
    } else {
        estadoLicuadora = "apagada"
        hacerBrbrbr();
        licuadora.classList.remove("active");
        /* console.log( " me apagaste"); */
    }
}

function hacerBrbrbr(){
    if(sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }

}