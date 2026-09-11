import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styles from "../stylepages/bookDetalle.module.css"
import useGetByIdBook from "../hooks/useGetByIdBook";
import DataBookDetalle from "./DataBookDetalle";
import DataBookEspecificaciones from "./DataBookEspecificaciones";

export default function BookDetalle() {
    const { id } = useParams();
    const book = useGetByIdBook(id);
    const [cantidad, setCantidad] = useState(1);
    if (!book) return <h3>cargando libro</h3>
    const total = book.price * cantidad;

    //divide y venceras
    function disminuir() {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }
    function aumentar() {
        setCantidad(cantidad + 1);
    }
    return (
        <>
            <main className={styles.contenedor}>
                <DataBookDetalle
                    book={book}
                    disminuir={disminuir}
                    aumentar={aumentar}
                    cantidad={cantidad}
                    total={total}
                />
                <DataBookEspecificaciones
                    book={book} />
            </main>
        </>
    )
}