import { useContext } from "react";
import { DatosUserContext } from "../context/UserContext";
import { Navigate, Outlet } from "react-router-dom";
import BackLogin from "../componentes/BackLogin";

//usuarios resgistrados
export default function PrivateRoute(){
    const {datosUser} = useContext(DatosUserContext);

    if(!datosUser){
        return <BackLogin/>
        //return <Navigate to="/login" replace/>
    }
    return <Outlet/>


    /*
    if(!user) -> lo mando a Login
    if(user registrado) -> no se como controlarlo
    if(user es admin) -> return outlet 
    */
}