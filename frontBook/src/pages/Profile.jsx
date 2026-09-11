import { useContext } from "react"
import { DatosUserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import styles from "../stylepages/profile.module.css"
export default function Profile() {
    const { datosUser } = useContext(DatosUserContext);
    return (
        <>
        <h1>FAVORITOS Y COMPRAS</h1>
            <div className={styles.perfil}>
                <h2 className={styles.titulo}>Perfil</h2>

                <div className={styles.datos}>
                    <p>
                        <span>Usuario</span>
                        {datosUser?.username}
                    </p>
                    <p>
                        <span>Email</span>
                        {datosUser?.email}
                    </p>
                    <p>
                        <span>Rol</span>
                        {datosUser?.rol}
                    </p>
                    <p>
                        <span>Password</span>
                        {datosUser?.password}
                    </p>
                </div>
            </div>

        </>
    )
}