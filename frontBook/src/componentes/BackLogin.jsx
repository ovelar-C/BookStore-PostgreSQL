import { Link } from "react-router-dom";

export default function BackLogin(){
    return(
        <>
        <h3>Debe Iniciar sesion {<Link to="/login">aquí</Link>}</h3>
        </>
    )
}