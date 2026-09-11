import { useContext } from "react"
import { DatosBookContext } from "../context/BookContext"
import imagen from "../assets/place.jpg"
import styles from  "../stylepages/catalog.module.css"
import { Link } from "react-router-dom";

export default function CatalogBook() {
    const { dataBook } = useContext(DatosBookContext);
    //usar UseEfectoooo, al editar y guardar, no se actualiza 
    return (
        <>
        <main>
            <div className={styles.contenedorCatalogo}>
                <ul className={styles.catalogo}>
                    {dataBook?.map((book) => (
                        <li key={book._id} className={styles.card}>
                            <Link to={`/book/${book._id}`}>
                            <div className={styles.marco}>
                                <img
                                    className={styles.imagen}
                                    src={`http://localhost:3000${book.bookImage}`}
                                    alt={book.title}
                                />
                            </div>
                            </Link>

                            <h3 className={styles.tituloCatalog}>{book.title}</h3>
                            <span>{book.author}</span>
                            <h3 className={styles.precio}>{book.price}$</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
        </>
    )
}