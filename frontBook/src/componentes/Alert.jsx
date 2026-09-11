import { useNavigate } from "react-router-dom";
import styles from "../stylepages/alert.module.css"
import { useEffect } from "react";

export default function Alert({ mensaje, respuesta, limpiar }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!mensaje) return;
        const timer = setTimeout(() => {
            limpiar();
            if (respuesta?.ok) {
                navigate("/configuracion");
            }
        }, 2500);
        return () => clearTimeout(timer);

    }, [respuesta, navigate]);
    if (!mensaje) return null;
    return (
        <>
            <div
                className={`${styles.alert} ${respuesta?.ok ? styles.success : styles.error}`}
            >
                {mensaje}
            </div>
        </>
    )
}