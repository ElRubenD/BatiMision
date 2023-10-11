/* function Counter () {
    return(
        <h1>Counter</h1>
    )
}
export default Counter */

//raftc

/* import React from 'react'

const Counter = () => {
  return (
    <div>Counter</div>
  )
}

export default Counter */


/* export const Counter = () =>{
    return(
        <>
            poner un callback dentro de la funcion (alert) para que espere y se ejecute solo al ahcer el click (onClick)
            <Boton onClick={()=> alert("Hiciste Click")}/>
            <Boton onClick={()=> alert("Hiciste otro Click")}/>

        </>

    )
} */

import { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button'

export const Counter = () =>{
    //hooks
    const [contador,setContador]= useState(0)
    
    //con el call back dentro todavia    
    useEffect(()=>{
        console.log("Cambio el contador")
    },[contador])

    return(
        <>
            <p>Contador: {contador}</p>
            <Button onClick={()=>setContador(contador+1)} variant="success">Sumar</Button>{' '}
            <Button onClick={()=>setContador(contador-1)} variant="danger">Restar</Button>{' '}            
        </>
    )
}

/* export const Counter2 = () =>{
    return(
        <h1>Conunter 2</h1>
    )
} */