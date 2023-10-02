
// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "React";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 45;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;



function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
return(str)
}
console.log(devolverString("Curso de React"));



function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return x + y
}
console.log(suma(7,8));



function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  return x - y
}
console.log(resta(10,8));



function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return x * y
}
console.log(multiplica(10,8));



function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return x / y
}
console.log(divide(10,8));


function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
/*   if(x === y){
    return ("true")    
  } else {
    return ("false")  
  } */
  return (x===y)
}
console.log(sonIguales(5,5));

// const sonIguales2 =(x,y)=>{return (x===y)}; console.log(sonIguales2(5,5));
//const sonIguales2 =(x,y)=> x===y ; console.log(sonIguales2(5,5));

//const devolverStr =str=> str; console.log(devolverStr("Hola"));

const sonIguales2=(x,y)=>{
/*   if(x === y){
    return ("true")    
  } else {
    return ("false")  
  }  */
  // if ternario
  x===y ? console.log(true) : console.log(false)
}

sonIguales2(10,11);

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
/*   if(str1.length == str2.length){
    return ("true");
  } else {
    return ("false");
  } */
  return (str1.length === str2.length)
}
console.log(tienenMismaLongitud("hola","hola"));



function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
/*   if(num<90){
    console.log("true");
  } else {
    console.log("false");
  } */
  return (num<90)
}
console.log(menosQueNoventa(50));



function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
/*   if(num>50){
    console.log("true");
  } else {
    console.log("false");
  } */
  return (num>50)
}
console.log(mayorQueCincuenta(50));



function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return (x % y);
}
console.log(obtenerResto(20,4));



function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
/*   if (num % 2 == 0) {
    console.log("true");
  } else {
    console.log("false");
  } */
  return (num % 2 == 0)
}
console.log(esPar(5));



function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
/*   if (num % 2 == 0) {
    console.log("false");
  } else {
    console.log("true");
  } */
  return (num % 2 == 1)
}
console.log(esImpar(5));



function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  //return (num * num)
    //return (num ** 2)
  return Math.pow(num,2)
}
console.log(elevarAlCuadrado(5));



function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  //return(num * num * num)
    //return (num ** 3)
  return Math.pow(num,3)
}
console.log(elevarAlCubo(5));



function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  //let resultado = Math.pow(num, exponent);
  //console.log(resultado)
  return Math.pow(num, exponent);
}
console.log(elevar(5,2));



function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round(num)
}
console.log(redondearNumero(1.5));



function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num)
}
console.log(redondearHaciaArriba(4.1));



function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random()
}
console.log(numeroRandom());



function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false

/*   if (numero > 0) {
    return "Es positivo"
  } else if (numero < 0) {
    return "Es negativo"
  } else {
    return false;
  } */

  //if ternario

  return( numero > 0 ? "Es positivo" : (numero > 0)? "Es negativo" : console.log(false))

/*     switch (true) {
    case numero > 0:
      return "Es positivo";
      break;
    
    case numero < 0:
      return "Es negativo";
      break;

    default:
      return false;
      break;
  }; */
}
console.log(esPositivo(10));



function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str + "!"
}
console.log(agregarSimboloExclamacion("Estudiar como se juega a la papa"));



function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
  //return nombre + " " + apellido
  //backstick + plantilla literal
  return `Hola hoy voy a hablar sobre ${nombre} ${apellido}`
}
console.log(combinarNombres("Bruce", "Wayne"));



function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return "Hola " + nombre
}
console.log(obtenerSaludo("Amilcar"));
const saludo = nombre => {return `Hola ${nombre}`}; console.log(saludo("Juan"));


const  obtenerAreaRectangulo = (alto, ancho) => {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  return ancho * alto
}
console.log(obtenerAreaRectangulo(10, 20));


const retornarPerimetro = (lado) => {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return lado * 4
}
console.log(retornarPerimetro(10));


const areaDelTriangulo = (base, altura) => {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return base * altura / 2
}
console.log(areaDelTriangulo(20,40));


const deEuroAdolar = (euro) =>{
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return `El cambio da Dolares es ${euro*1.2}`
}
console.log(deEuroAdolar(100));



const esVocal = (letra) => {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
  if (letra.length != 1) {
    return `Ingresaste ${letra} ,Tiene mas de un caracter`
  } else if (
    letra == "a" ||
    letra == "e" ||
    letra == "i" ||
    letra == "o" ||
    letra == "u") {
    return `La letra ${letra} es una Vocal`
  } else {
    return `Ingresaste un dato incorrecto`
  }
}
console.log(esVocal("A".toLowerCase()));