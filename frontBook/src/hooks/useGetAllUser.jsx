import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetAllUser() {
    const [datos, setDatos] = useState([]);
    const api = "http://localhost:3000/api/bookstore/users"
    useEffect(() => {
        axios.get(api)
            .then((respuesta) => {
                setDatos(respuesta.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);
    return datos;
}