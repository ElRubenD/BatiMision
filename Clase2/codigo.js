// interacciones
/*
alert("Hola Codo a Codo")

prompt
muestra un msj que interactura con el usuario
prompt("Decime tu nombre")

confirm
Muestra un msj
confirm("Bienvenido a mi Pagina")

modales que detienen la secuencia del codigo hasta que de una respuesta
*/

/*
Caracteristicas
- Interpretado (se ejecuta en el navegador)
- Orientado a Objetos
- Imperativo
- Case sensitive (es sensible a MAY y min)
- Basado en prototipos - instancias - clases
- Tipado debil
- Lenguaje dinamico - el dato se ajusta a la variable
*/

//Convenciones de nombre

/*
camelcase (2)
UpperCamelCase : la primer letra de cada palabra es MAYUSCULA
lowerCamleCase : la primer letra es en minuscula y el restro de inicios es MAYUSCULAS

snake_case: las palabras estan separadas por guinoes bajos

trains-case: las palabras estan unidas con guiones
*/  

/*
Variables
es una forma de almacenar valores para utilizarlos mas tarde
*/
/*
var nombre = "Juana"
let apellido = "Perez"
const deporteFavorito = "Boxeo"

document.write(nombre)
*/
/*
let nombre = prompt("Decime tu nombre")

alert(nombre)
*/

//Tipos de datos
/*
let nombre = "Nombre" / cadena de texto - String
let apellido = "Apellido"
let edad = 70 / numero - Numero
let tecnico = true / booleano - Boolean
let campeones = ["Oliveras","Gallardo", true, 32, "Carlos"]
*/
//Concantenacion
let nombre = prompt("Decime tu nombre")
let num1 = Number(prompt("Decime un numero apra sumar"))
let num2 = Number(prompt("Decime otro numero para sumar"))
let resultado = num1+num2

document.write(nombre + " el resultado de tu suma es = " + resultado)