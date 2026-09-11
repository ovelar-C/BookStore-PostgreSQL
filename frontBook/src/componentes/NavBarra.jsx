import { Link } from "react-router-dom";
import styles from '../stylepages/navBarra.module.css'
import { useContext } from "react";
import { DatosUserContext } from "../context/UserContext";
import imagen from "../assets/logo.webp"
//nav para : admin, usuario, lector
export default function NavBarra() {
    const { datosUser, signOut } = useContext(DatosUserContext);
    return (
        <>
            <nav className={styles.barra}>
                <img
                className={styles.imagen}
                src={imagen}
                />
                <h1>BookStore</h1>
                <Link className="botones" to={'/'}>home</Link>
                <Link className="botones" to={'/books'}>libros</Link>
                <Link className="botones" to={'/profile'}>perfil</Link>
                {datosUser ?
                    (<button className="botones" onClick={signOut}>Cerrar sesion</button>)
                    :
                    (<Link className="botones" to={'/login'}>Iniciar Sesion</Link>
                    )
                }
                {datosUser?.rol == "admin" &&
                    <Link className="botones" to={'/configuracion'}>Configuración</Link>}
            </nav>
        </>
    )
}