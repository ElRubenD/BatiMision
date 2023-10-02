//const deEuroAdolar = euro =>`El cambio da Dolares es ${euro*1.2}`; console.log(deEuroAdolar(100));

/* function deEuroADolar (nombre,euro){
    return alert (`${nombre} El cambio es ${euro*1.12} euros`)
}
deEuroADolar (prompt("Decime la cantidad de Nombre"),Number(prompt("Decime la cantidad de Euros"))) */

/* const deEuroADolar = (nombre,euro) => {return alert (`${nombre} El cambio es ${euro*1.12} euros`)}
deEuroADolar (prompt("Decime la cantidad de Nombre"),Number(prompt("Decime la cantidad de Euros")))
 */

//let semaforo = prompt("Decime un color")
let semaforo = "amarillo"

switch (semaforo.toUpperCase()) {
    case "ROJO":
        console.log("No podes pasar");
        //return `No podes pasar`
        break;
    case "AMARILLO":
        console.log("Precaucion");
        //return `Precaucion`
        break;
    case "VERDE":
        console.log("Podes avanzar");
        //return `Podes avanzar`
        break;
    default:
        console.log("No es un color de semaforo");
        break;
}

// Switch recomendar juego / pelicula / libro

let sumar = (num1,num2) => num1 + num2
let restar = (num1,num2) => num1 - num2
let multiplicar = (num1,num2) => num1 * num2
let dividir = (num1,num2) => num1 / num2

let calculadora = (num1,num2,operacion) => operacion (num1, num2);

console.log(calculadora(10,10,sumar));
console.log(calculadora(10,10,restar));
console.log(calculadora(10,10,multiplicar));

// CallBack

//CallBack Hell Investigar
