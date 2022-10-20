const botonHamburguesa = document.getElementById("btn-hamburguesa");

botonHamburguesa.addEventListener("click", () => {
    botonHamburguesa.classList.toggle("abierto");
});

// const moverInfo = (mediaQueryList) => {
//     let listaInfo = document.querySelector("#informacion");
//     let navbarAddress = document.querySelector("header address");
//     if (mediaQueryList.matches){
//         navbarAddress.removeChild(listaInfo);
//     }
//     else {
//         navbarAddress.removeChild(listaInfo);
//     }
// }

// const mobileBreakpoint = matchMedia("screen and (max-width: 570px)");
// mobileBreakpoint.addEventListener("change", moverInfo);

// moverInfo(mobileBreakpoint);
