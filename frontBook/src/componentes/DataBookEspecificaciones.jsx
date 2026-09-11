import styles from "../stylepages/bookDetalle.module.css"
export default function DataBookEspecificaciones({book}) {
    return (
        <>
            <section className={styles.especificaciones}>
                <h3 className={styles.tituloEspecificaciones}>Especificaciones</h3>

                <div className={styles.item}>
                    <span className={styles.label}>Descripción</span>
                    <p>{book.description}</p>
                </div>

                <div className={styles.item}>
                    <span className={styles.label}>Editorial</span>
                    <p>{book.editorial}</p>
                </div>
                <div className={styles.item}>
                    <span className={styles.label}>Categoría</span>
                    <p>{book.genre}</p>
                </div>

                <div className={styles.item}>
                    <span className={styles.label}>Idioma</span>
                    <p>{book.language}</p>
                </div>

                <div className={styles.item}>
                    <span className={styles.label}>Año de publicación</span>
                    <p>{book.publishedYear}</p>
                </div>
                <div className={styles.item}>
                    <span className={styles.label}>Tipo</span>
                    <p>{book.type}</p>
                </div>
            </section>
        </>
    )
}