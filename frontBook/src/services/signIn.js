import axios from "axios";

export default async function signIn(dataUser){
    const api = 'http://localhost:3000/api/bookstore/users/login'
    //try {
        const response = await axios.post(api,dataUser);
        return response.data
    /*} catch (error) {
        console.log(error);
        throw error;
    }*/
}