// Se le muestra al usuario los servicios disponibles, debería poder elegir el que necesite, se le comunica precio.
// Pre-entrega 1

//Objeto constructor
class Servicio {
    constructor (id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
}

calcularIva() {
  this.precio = this.precio * 1.21;
}
}

// Creo arrays para especificar cada servicio 

const servicios = [
    {id: 1, nombre: "Imagen personal", precio: 3000},
    {id: 2, nombre: "Asesoria Express", precio: 3500},
    {id: 3, nombre: "Creación", precio: 4000},
];

// Se le muestra al usuario 

let avisoAUsuario = prompt ("Estos son los servicios disponibles (solo presione ENTER)");
for(const servicio of servicios) {
    alert ("ID" + " " + servicio.id + " " + servicio.nombre);
}

const precioImagen = 3000;
const precioAsesoria = 3500;
const precioCreacion = 4000;

function precioIm () {
 return precioImagen * 1.21
}

function precioAs () {
    return precioAsesoria * 1.21
}

function precioCre () {
    return precioCreacion * 1.21
}

// Interacción con el usuario 

let servicioSeleccionado = prompt ("Ingrese el servicio que desea adquirir Imagen personal, Asesoría express o Creación")
const selecImagen = servicios.find(servicios => servicios.nombre === servicioSeleccionado);
const selecAsesoria = servicios.find(servicios => servicios.nombre === servicioSeleccionado);
const selecCreacion = servicios.find(servicios => servicios.nombre === servicioSeleccionado);


// Se indica el precio final del servicio elegido 

if (servicioSeleccionado === "Imagen personal") {
    alert ("El precio de tu compra es $" + precioIm());
} else if (servicioSeleccionado === "Asesoria express") {
    alert ("El precio de tu compra es $" + precioAs());
} else if (servicioSeleccionado === "Creacion") {
    alert ("El precio de tu compra es $" + precioCre());
} else {
    alert("El número ingresado no es válido")
}

// Dom y Eventos 