//importaciones
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";

import {collection,getDocs,deleteDoc,doc} from "firebase/firestore";
import {db} from "../firebaseConfig/firebase.js";

import Swal from "sweetalert2";
import whitReactContent from "sweetalert2-react-content";
const mySwal = whitReactContent (Swal);

export const Show = ()=>{
    //1 configurar useState (hook)
    //2 referenciar a la DB de firestore
    //3 funcion para mostrar todos los documentos
    //4 funcion para eliminar un documento
    //5 funcion para sweet alert (confirmacion /eliminacion de documento)
    //6 useEffect
    //7 devolver la vista de nuestro componente
    return (
        <h1> aca se van a mostrar todos los documentos </h1>
    )
}