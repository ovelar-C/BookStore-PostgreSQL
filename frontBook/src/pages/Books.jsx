import { useState } from "react";
import CatalogBook from "../componentes/CatalogBook";
import imagen from "../assets/lupa.svg"
import styles from "../stylepages/books.module.css"
export default function Books() {
    const [busqueda, setBusqueda] = useState("");
    return (
        <>
            <main>
                <div className={styles.navbarra}>
                    <div className={styles.barra}>
                        <img
                            className={styles.imagen}
                            src={imagen}
                            alt="logo lupa"
                        />
                        <input
                            className={styles.input}
                            placeholder="buscar titulo, autor, editorial ..."
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                        />
                    </div>
                    <button className="botones" id={styles.boton}>buscar</button>
                </div>
                <CatalogBook />

            </main>

        </>
    )
}