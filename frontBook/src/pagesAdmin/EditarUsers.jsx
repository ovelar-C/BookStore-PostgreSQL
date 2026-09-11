import { useParams } from "react-router-dom";
import FormUser from "../componentes/FormUser";

export default function EditarUsers(){
    const {id} = useParams();
    
    return(
        <>
        <FormUser

        />
        </>
    )
}