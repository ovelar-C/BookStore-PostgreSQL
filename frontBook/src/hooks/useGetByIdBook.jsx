import axios from "axios";
import { useEffect, useState } from "react"

export default function useGetByIdBook(id){
    const [book, setBook] = useState(null);
    useEffect(()=>{
        if(!id) return;
        axios.get(`http://localhost:3000/api/bookstore/books/${id}`)
            .then((respuesta)=>{
                setBook(respuesta.data);
                return respuesta.data
            })
            .catch((error)=>{
                console.log(error);
                setBook(null);
                return null;
            })
    },[id]);
    return book;
}