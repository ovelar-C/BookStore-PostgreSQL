import { createContext, useState } from "react"
import { data, useNavigate } from "react-router-dom";
import signIn from "../services/signIn";
import registerUser from "../services/registerUser";

export const DatosUserContext = createContext();
//arreglar el manejo del localstore
export default function UserContext({ children }) {
    const [datosUser, setDatosUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const navigate = useNavigate();

    async function signUp(dataUser) {
        try {
            const response = await registerUser(dataUser);

            if (response.ok) {
                const datosNuevos = {
                    username: response.data.username,
                    email: response.data.email,
                    rol: response.data.rol
                }
                saveLocalStorage(datosNuevos);
                return navigate('/profile');
            }
            return navigate('/register');
        } catch (error) {
            console.log(error);
        }

    }

    async function signUser(dataUser) {
        const respuesta = await signIn(dataUser);
        if (respuesta) {
            saveLocalStorage(respuesta);
            navigate('/');
        }
        return respuesta;
    }

    function signOut() {
        setDatosUser(null);
        localStorage.removeItem("user");
        navigate("/login");
    }

    function saveLocalStorage(data) {
        setDatosUser(data);
        localStorage.setItem('user', JSON.stringify(data));
    }

    return (
        <>
            <DatosUserContext.Provider value={{ signOut, signUp, datosUser, signUser }}>
                {children}
            </DatosUserContext.Provider>
        </>
    )
}