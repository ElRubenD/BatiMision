/*
//funcion para cargar peliculas
window.addEventListener("load", () => {
    cargarPeliculas();
});

//variable para controlar la paginacion
let pagina = 1;

// Capturar los botones
let btnAnterior = document.querySelector(".btnAnterior");
let btnSiguiente = document.querySelector(".btnSiguiente");

//funcion BTN anterior
btnAnterior.addEventListener("click", () => {
    if (pagina > 1) {
        pagina -= 1;
        //pagina = pagina-1
        //funcion que carga las peliculas
        cargarPeliculas();
    }
});

//funcion BTN siguiente
btnSiguiente.addEventListener("click", () => {
    if (pagina < 500) {
        pagina +=1;
        //pagina = pagina+1
        //funcion que carga las peliculas
        cargarPeliculas();
    }
});

//funcion que carga y muestra las peliculas

const cargarPeliculas = async () => {
    try {
        let respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=379b54ee49b716f399b5f948a113fa0b&language=es-MX&page=${pagina}`);
        //console.log(respuesta);
        if (respuesta.status == 200) {
            let datos = await respuesta.json()
            //console.log(datos.results);

            let peliculas = "";
            datos.results.forEach((pelicula => {
                peliculas +=`
                <div class="pelicula">
                <img class = "poster" scr= "https://image.tmdb.org/t/p/w500${pelicula.poster_path}"/>
                <h3 class="titulo">${pelicula.title}</h3>
                </div>
                `
            document.querySelector(".contenedor").innerHTML = peliculas;
            }));            
        } else if (respuesta.status === 404){
            console.log("error 404 nos vemos en otro lugar");
        }
    } catch (error) {
        console.log(error);
    }
};

//ejercitacion: arreglar la paginacion para que de la 1 de anterior mande a la 500
*/


//funcion para cargar peliculas
window.addEventListener("load", () => {
  cargarPeliculas();
});

//variable para controlar la paginacion
let pagina = 1;

// captures los botones

let btnAnterior = document.querySelector(".btnAnterior");
let btnSiguiente = document.querySelector(".btnSiguiente");

// funcion BTN Anterior

btnAnterior.addEventListener("click", () => {
  if (pagina > 1) {
    pagina -= 1; //--
    /*   pagina= pagina-1  */

    //funcion que carga las peliculas
    cargarPeliculas();
  }
});
// funcion BTN Siguiente
btnSiguiente.addEventListener("click", () => {
  if (pagina < 500) {
    pagina += 1; //++
    /*   pagina= pagina+1  */

    //funcion que carga las peliculas
    cargarPeliculas();
  }
});

// funcion que carga y muestra las peliculas

const cargarPeliculas = async () => {
  try {
    let respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=379b54ee49b716f399b5f948a113fa0b&language=es-MX&page=${pagina}`
    );
    /*   console.log(respuesta); */
    if (respuesta.status == 200) {
      let datos = await respuesta.json();
      /*     console.log(datos.results); */
      let peliculas = "";

      datos.results.forEach((pelicula) => {
        peliculas += `
        <div class="pelicula">
          <img class= "poster" src= "https://image.tmdb.org/t/p/w500${pelicula.poster_path}"/>
          <h3 class= "titulo">${pelicula.title}</h3>
        </div>
        `;

        document.querySelector(".contenedor").innerHTML = peliculas;
        
      });
    } else if (respuesta.status === 404){
        console.log("error 404 nos vemos en otro lugar");
    }
  } catch (error) {
    console.log(error);
  }
};