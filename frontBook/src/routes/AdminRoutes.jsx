import { useContext } from "react"
import { DatosUserContext } from "../context/UserContext"
import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoutes(){
    const {datosUser} = useContext(DatosUserContext);

        if(!datosUser) return <Navigate to="/login" replace/>
     
        if(datosUser.rol !== "admin"){
            return <Navigate to="/" replace/>
        }
        return <Outlet/>
}