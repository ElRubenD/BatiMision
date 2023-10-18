import "./app.css"
import { LandingPage } from "./pages/LandingPage"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

export const App = ()=>{
    return(
        <BrowserRouter>
            <header>
                <Link to="/">
                    <h1 className="title">Peliculas</h1>
                </Link>
            </header>
            
            <Routes>
                <Route path="/" element = {<LandingPage />} />
                <Route path="/pelicula" element = "Detalle pelicula" />                                
            </Routes>

        </BrowserRouter>
    )
}