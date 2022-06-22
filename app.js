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
  this.precio = precio * 1.21;
}
}

// Creo arrays para especificar cada servicio 

const servicioImagen = [];
const servicioAsesoria = [];
const servicioCreacion = [];

// Cargo los servicios 

servicioImagen.push(new Servicio (1, "Imagen personal", 3000));
servicioAsesoria.push(new Servicio (2, "Asesoría express", 3500));
servicioCreacion.push(new Servicio (3, "Creación", 4000));

console.log (servicioImagen.precio);
// Se le muestra al usuario 

let avisoAUsuario = prompt ("Estos son los servicios disponibles (solo presione ENTER)");
for(const imagen of servicioImagen) {
    alert ("ID" + " " + imagen.id + " " + imagen.nombre);
}

for(const asesoria of servicioAsesoria) {
    alert ("ID" + " " + asesoria.id + " " + asesoria.nombre);
}

for(const creación of servicioCreacion) {
    alert ("ID" + " " + creación.id + " " + creación.nombre);
}

// Precios NOOOOO

/* const iva = precio => precio * 1.21 

console.log(iva)
 */
// Interacción con el usuario 

let servicioSeleccionado = prompt ("Ingrese el ID del servicio que desea adquirir (Solo los números 1, 2 3)")
const selecImagen = servicioImagen.find(imagen => imagen.id === servicioSeleccionado);
const selecAsesoria = servicioAsesoria.find(asesoria => asesoria.id === servicioSeleccionado);
const selecCreacion = servicioCreacion.find(creacion => creacion.id === servicioSeleccionado);


// Se indica el precio final del servicio elegido 
// NoOOOO funciona 
if (servicioSeleccionado === 1) {
    alert ("El precio de tu compra es $")
    console.log ("entro al primero", precio)
} else if (servicioSeleccionado === 2) {
    alert ("El precio de tu compra es $");
    console.log ("entro al segundo", precio)
} else if (servicioSeleccionado === 3) {
    alert ("El precio de tu compra es $" + " " + precio);
} else {
    alert("El número ingresado no es válido")
}

// Dom y Eventos 