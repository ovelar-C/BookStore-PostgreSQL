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
            console.log(dataUser);
            const response = await registerUser(dataUser);
            console.log(response);
            if (response.ok) {
                const datosNuevos = {
                    username: response.data.usuario.username,
                    email: response.data.usuario.email,
                    rol_id: response.data.usuario.rol_id
                }
                saveLocalStorage(datosNuevos);
                console.log("USUARIO REGISTRADO Y GUARDADO", datosNuevos);

                return navigate('/profile');
            }

            return response;
            return navigate('/register');
        } catch (error) {
            console.log(error);
        }
    }

    async function signUser(dataUser) {
        try {
            const respuesta = await signIn(dataUser);
            console.log(respuesta);
            const token = respuesta.data.token;
            console.log(respuesta.data.usuario);
            if (respuesta.ok) {
                saveLocalStorage(respuesta.data.usuario);
                navigate('/');
            }
            return respuesta;
        } catch (error) {
            console.log(error);
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