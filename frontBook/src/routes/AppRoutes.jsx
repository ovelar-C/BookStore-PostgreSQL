import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Layout from "../componentes/Layout";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Books from "../pages/Books";
import PrivateRoute from "./PrivateRoute";
import AdminRoutes from "./AdminRoutes";
import PageNoFound from "../componentes/PageNoFound";
import Configuracion from "../pagesAdmin/Configuracion";
import CreateBooks from "../pagesAdmin/CreateBooks";
import CreateUsers from "../pagesAdmin/CreateUsers";
import EditarBooks from "../pagesAdmin/EditarBooks";
import BookDetalle from "../componentes/BookDetalle";
import EditarUsers from "../pagesAdmin/EditarUsers";

export default function AppRoutes() {
    //envolver las rutas privadas
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route element={<PrivateRoute />}>
                    <Route path="/profile" element={<Profile />} />
                </Route>
                <Route element={<AdminRoutes />}>
                    <Route path="/configuracion" element={<Configuracion/>}/>
                    <Route path="/createbooks" element={<CreateBooks/>}/>
                    <Route path="/createusers" element={<CreateUsers/>}/>
                    <Route path="/editarbooks/:id" element={<EditarBooks/>}/>
                    <Route path="/editarusers/:id" element={<EditarUsers/>}/>
                    
                </Route>

                <Route path="/book/:id" element={<BookDetalle/>}/>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/books" element={<Books />} />
                <Route path="*" element={<PageNoFound/>}/>
            </Route>
        </Routes>
    )
}