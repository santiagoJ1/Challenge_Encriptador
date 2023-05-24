const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");
const mensajeTextarea = document.querySelector(".main__mensaje textarea");

textArea.focus();

/* Llaves de encriptacion */
const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

/* Funciones para los Botones encriptar y desEncriptar */
function encriptar(stringEncriptado){
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function desEncriptar(stringDesencriptado){
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

/* Funcion para modificar el fondo del textarea Mensaje */
function restaurarFondo() {
    mensajeTextarea.classList.remove("active");
}

/* Desde aca las funciones de los botones para conectar con el HTML */
function btnEncriptar() {
    if (textArea.value.trim() !== "") {
        let textoEncriptado = encriptar(textArea.value);

        mensaje.value = textoEncriptado;
        textArea.value = "";
        textArea.focus();

        mensajeTextarea.classList.add("active");
    }
}

function btnDesEncriptar() {
    if (textArea.value.trim() !== "") {
        let textoDesencriptado = desEncriptar(textArea.value);

        mensaje.value = textoDesencriptado;
        textArea.value = "";
        textArea.focus();

        mensajeTextarea.classList.add("active");
    }
}

function btnCopiar() {
    if (mensaje.value.trim() !== "") {
        mensaje.select();
        document.execCommand("copy");
        mostrarMensajeCopiado();
        mensaje.select();
    }
}

function btnLimpiar() {
    if (textArea.value.trim() !== "" || mensaje.value.trim() !== "") {
        mensaje.value = "";
        textArea.value = "";
        textArea.focus();
        restaurarFondo();
    }
}

/* Este codigo combia las letras mayuscula y con acento que ingresa el usuario, a minusculas automaticamente */
textArea.addEventListener('input', function() {
    this.value = this.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
});

mensajeTextarea.addEventListener('input', function() {
    this.value = this.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
});