import "./PeliculasGrid.css"

import { PeliculasCard } from "./PeliculasCard";

import peliculas from "./data/peliculas.json"

export const PeliculasGrid = ()=>{
    return(
        <ul className="moviesGrid">
            {peliculas.map((pelicula)=>(
                <PeliculasCard key={pelicula.id} pelicula={pelicula} />
            ))}

            
        </ul>
    )
}