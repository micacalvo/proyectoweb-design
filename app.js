// Se le muestra al usuario los servicios disponibles, debería poder elegir el que necesite, se le comunica precio.
// Desafío "Incorporar Arrays" -También se crea el objeto-

class Servicios {
    constructor (id, nombre, precio) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = precio;
}
}

const servicios = [
    { id: 1, servicio: "Imagen personal", precio: 3000},
    { id: 2, servicio: "Asesoria express", precio: 3500 },
    { id: 3, servicio: "Creacion", precio: 4000 }];

for (const servicio of servicios) {
    console.log(servicio);
}

function precio () {
    switch (preguntaAUsuario) {
        case "Imagen personal":
            alert("El servicio cuesta 3000 pesos");
            break;
        
        case "Asesoria express":
            alert("El servicio cuesta 3500 pesos");
            break;
                
        case "Creacion":
            alert("El servicio cuesta 4000 pesos");
            break;    

        default:
        alert("El valor ingresado no es correcto");
        break;
}
}

let preguntaAUsuario = prompt("Ingrese el servicio que desee, Imagen personal, Asesoria express o Creacion");

precio ();

