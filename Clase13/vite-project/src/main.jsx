// 1ro modulos
import React from 'react'
import ReactDOM from 'react-dom/client'
// 2do componentes
import Boton from './Boton.jsx'  
// 3ro CSS
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Boton numero={1} nombre="Pepe"/>
    <Boton numero={2} nombre="Pepa"/>
    <Boton numero={3} />
    <Boton numero={4} />
    <Boton numero={5} />
  </div>

)
