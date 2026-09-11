import axios from "axios";
import { useEffect, useState } from "react"

export default function useGetAllBook(){
    const[datos,setDatos] = useState([]);
    const api = "http://localhost:3000/api/bookstore/books";

    useEffect(()=>{
        axios.get(api)
        .then((respuesta)=>{
            setDatos(respuesta.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[]);
    return datos;
}