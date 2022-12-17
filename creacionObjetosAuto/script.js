// Función manejadora.

function manejadorDeClick(event) {
    if (event.target.name === "boton") { // Con esto me aseguro que el elemento que dispara el evento al clickar es el botón y no otro, como por ej. el input text.
        var coches = document.getElementById("coches").value;
        creaCoches(coches);
    }

}

// Definición del objeto "coche".

function coche(marca, ) {
    // TODO: CREAR OBJETO COCHE.
}



// Función iterativa creadora de coches.
function creaCoches(cars) {
    // Aquí irían la creación automática de 5 objetos "cars" mediante un for.
    // TODO: CREAR LA CREACIÓN DE COCHES DE FORMA ITERATIVA.
}




document.addEventListener("click", manejadorDeClick, false);
