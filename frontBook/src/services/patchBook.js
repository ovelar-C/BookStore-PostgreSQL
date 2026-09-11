import axios from "axios";

export default async function patchBook(id,data){
    const api = `http://localhost:3000/api/bookstore/books/${id}`
    try {
        if(!id || !data) return;
        console.log("en patch");
        const respuesta = await axios.patch(api,data)
        console.log(respuesta);
        return{
            ok: true,
            status: respuesta.status,
            data : respuesta.data
        }
    } catch (error) {
        return{
            ok: false,
            status : error.response?.status,
            data : error.response?.data
        }
    }
}