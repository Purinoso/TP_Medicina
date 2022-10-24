const btnHamburguesa = document.getElementById("btn-hamburguesa");
const botonera = document.getElementById("botonera");
const listaInfo = document.getElementById("informacion");
const navbarAddress = document.querySelector("header address");

btnHamburguesa.addEventListener("click", () => {
    btnHamburguesa.classList.toggle("abierto");
});

// Si el ancho es menor o igual a 570px agrega la información a la lista desplegable.
// caso contrario la agrega a la tira de arriba.
const moverInfo = mediaQueryList => {
    if (mediaQueryList.matches) {
        let liContenedorInfo = document.createElement("li");
        liContenedorInfo.appendChild(listaInfo);
        botonera.appendChild(liContenedorInfo);
    } 
    else {
        navbarAddress.appendChild(listaInfo);
        botonera.lastChild.remove();
    };
}

const movilBreakpoint = matchMedia("screen and (max-width: 590px)");
movilBreakpoint.addEventListener("change", moverInfo);

moverInfo(movilBreakpoint);