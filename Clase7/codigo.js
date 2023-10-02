// Sentencia While

//let numero = Number(prompt("Decime un numero: "))

/* while (numero < 1000) {
    numero++;
    document.write(numero + "<br>")
    if (numero == 500) {
        break;
    } 
}*/
/* do {
    numero++;
    document.write (numero)
} while (numero < 10) */
//for
//declaramos la variable, expresion condicional, incrementamos la variable
/* for (let i = 0 ; i < 10; i++){
    console.log(i);
}

for (let i = 1; i <= 10; i++){
    console.log(2 * i);
} */

//Arrays

/* let frutas = ["Manzana", "Banana", "Pera", "Tomate"]

console.log(frutas[3]); */

let animales = ["Gato", "Perro", "Tigre", "Conejo", "Pez", "Rata", "Tortuga", "Gato", ]
let numeros = [1,2,8,7,4,6,7,3]

//metodos

//let nuevoArray = animales.slice(2,5)
//console.log(nuevoArray);

//agrega un elemento al cominezo del Array
animales.unshift("Elefante")
console.log(animales);

//elimina un elemnto al comienzo del array
animales.shift()
console.log(animales);

//elimina un elemnto al final del array
animales.pop()
console.log(animales);

//agrega un elemento al final del Array
animales.push("Cocodrilo")
console.log(animales);

//
const nuevoArray = numeros.find(elemnt => elemnt<9)
console.log(nuevoArray);

animales.forEach((elemnt,i) => {
    console.log(`Animal: ${elemnt} esta en la posicion ${i}`);
})

let nuevoArray2 = animales.filter (elemnts => elemnts==="Perro")
console.log(nuevoArray2);

let nuevoArray3 = numeros.map(elemnts=>elemnts*10)
console.log(nuevoArray3);