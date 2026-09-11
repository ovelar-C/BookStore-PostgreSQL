import { Outlet } from "react-router-dom";
import NavBarra from "./NavBarra";

export default function Layout(){
    return(
        <>
            <NavBarra/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}