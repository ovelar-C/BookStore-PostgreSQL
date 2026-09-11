import { useContext, useState } from "react";
import FormUser from "../componentes/FormUser";
import { DatosUserContext } from "../context/UserContext";
import Alert from "../componentes/Alert";
import registerUser from "../services/registerUser";

export default function CreateUsers(dataUser) {
    const [mensaje, setMensaje] = useState("");
    const [respuesta, setRespuesta] = useState(null);
    async function crearUsuarios(dataUser) {
        try {
            console.log(dataUser);
            const response = await registerUser(dataUser);
            setRespuesta(response);
            if (response.ok) {
                setMensaje("Exito al registar usuauris");
            } else {
                setMensaje("Error al registrar usuario")
            }
        } catch (error) {
            console.log(error);
            setMensaje("Error al guardar usuario en la base de datos");
        }

    }
    return (
        <>
            <Alert
            mensaje = {mensaje}
            respuesta = {respuesta}
            limpiar = {()=>{
                setMensaje("");
                setRespuesta("");
            }}
            />
            <h1 className="titulo">Registrar Usuarios</h1>
            <FormUser
                funcion={crearUsuarios}
            />
        </>
    )
}