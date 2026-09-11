import axios from "axios";

export default async function registerBook(dataBook){
const api = 'http://localhost:3000/api/bookstore/books/register';
    try {
        const response = await axios.post(api, dataBook);
        return {
            ok : true,
            status : response.status,
            data : response.data
        }
    } catch (error) {
        console.log(error);
        return {
            ok : false,
            status: error.response?.status,
            data: error.response?.data
        };
    }
}