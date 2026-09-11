import { Link } from "react-router-dom";
import List from "../componentes/List";
import { useContext, useState } from "react";
import styles from "../stylepages/configuracion.module.css"
import { DatosBookContext } from "../context/BookContext";
import useGetAllUser from "../hooks/useGetAllUser";

export default function Configuracion() {
    const [showBooks, setShowBooks] = useState(false);
    const [showUsers, setShowUsers] = useState(false);
    const { dataBook } = useContext(DatosBookContext);
    const dataUser = useGetAllUser() || [];
    return (
        <>
            <main className="main">
                <h1>buscardor por usuario y libro</h1>
                <div className={styles.contenedor}>
                    <div className={styles.list}>
                        <button
                            className="botones"
                            onClick={() => setShowBooks(!showBooks)}>
                            {showBooks ? "ocultar libros" : "mostrar libros"}
                        </button>
                        <button
                            className="botones"
                            onClick={() => setShowUsers(!showUsers)}>
                            {showUsers ? "ocultar usurios" : "mostrar usuarios"}
                        </button>
                    </div>
                    <div className={styles.links}>
                        <Link className="botones" to={'/createbooks'}>Registrar Libros</Link>
                        <Link className="botones" to={'/createusers'}>Registrar Usuarios</Link>
                    </div>
                </div>
                <div className={styles.datos}>
                    {showBooks && <List
                        datos={dataBook}
                        tipo={"book"} />}
                    {showUsers && <List
                        datos={dataUser}
                        tipo={"user"} />}
                </div>
            </main>
        </>
    )
}