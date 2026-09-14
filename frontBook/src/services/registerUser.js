import axios from "axios";

export default async function registerUser(dataUser){
    const api = 'http://localhost:3000/api/user/register';
    try {
        const response = await axios.post(api,dataUser);
        return {
            ok : true,
            status : response.status,
            data : response.data
        }
    } catch (error) {
        return {
            ok : false,
            status: error.response?.status,
            data: error.response?.data
        };
    }
}