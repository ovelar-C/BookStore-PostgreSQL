import axios from "axios";

export default async function signIn(dataUser){
    const api = 'http://localhost:3000/api/user/login'
    try { 
        const response = await axios.post(api,dataUser);
        return {
            ok:true,
            status : response.status,
            data: response.data
        }
    } catch (error) {
        return {
            ok : false,
            status: error.response?.status,
            data: error.response?.data
        };
    }
}