import "./app.css"
import { PeliculasGrid } from "./PeliculasGrid"

export const App = ()=>{
    return(
        <div>
            <header className="title">
                Peliculas
            </header>
            <main>
                <PeliculasGrid />
            </main>
        </div>
    )
}