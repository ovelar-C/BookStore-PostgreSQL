import axios from "axios";

export default async function registerUser(dataUser){
    const api = 'http://localhost:3000/api/bookstore/users/register';
    try {
        const response = await axios.post(api,dataUser);
        console.log(response);
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