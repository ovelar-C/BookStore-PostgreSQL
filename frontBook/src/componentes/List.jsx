import { useContext } from 'react';
import useGetAllBook from '../hooks/useGetAllBook';
import { DatosBookContext } from '../context/BookContext';
import styles from "../stylepages/listBook.module.css"
import { Link } from 'react-router-dom';

export default function List({ datos, tipo }) {
    //lista q solo verá el admin//usar useffect
    return (
        <>
            <main className={styles.main}>
                <div className={styles.datos}>
                    <ul className={styles.lista}>
                        {datos?.map((dato) => (
                            <li
                                className={styles.item}
                                key={dato._id}>
                                {tipo == "book" ?
                                    (
                                        <>
                                            <span>{dato.title}</span>
                                            <Link
                                                className={styles.boton}
                                                to={`/editarbooks/${dato._id}`}>
                                                ver más
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <span>{dato.username}</span>
                                            <Link 
                                                className={styles.boton} 
                                                to={`/editarusers/${dato._id}`}>
                                                ver más
                                            </Link>
                                        </>
                                    )}
                            </li>
                        ))}
                    </ul>
                </div>
            </main >
        </>
    )
}