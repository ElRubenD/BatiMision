// Splice

//Objetos {}
//par clave valor
const celular = {
    marca: "Apple",
    modelo: 11,
    stock: true,
    encender : function () {
        console.log(`Celular ${this.marca} encendido`);
    }
}
//console.log(celular.marca);
celular.encender()

let generoAccion = {
    NombreGenero: "Accion",
    rankink:1
}

let duroMatar = {
    titulo: "rambo",
    popularidad: 10,
    ...generoAccion
}

console.log(duroMatar);

//destructuring

let seleccion = ["messi", "de paul", "Martinez"]

//sin destructuring