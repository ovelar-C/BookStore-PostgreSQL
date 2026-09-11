import styles from "../stylepages/bookDetalle.module.css"
export default function DataBookDetalle({book, disminuir, aumentar, cantidad, total}) {
    return (
        <>
            <section className={styles.principal}>
                <div className={styles.marco}>
                    <img
                        className={styles.portada}
                        src={`http://localhost:3000${book.bookImage}`}
                        alt="sin imagen"
                    />
                </div>
                <div className={styles.datos}>
                    <h2 className="titulo">{book.title}</h2>
                    <span>{book.author}</span>
                    <h3 className={styles.precio} >${book.price}</h3>

                    <div className={styles.cuantos}>
                        <button className="botones" onClick={disminuir}>-</button>
                        <span className={styles.span}>{cantidad}</span>
                        <button className="botones" onClick={aumentar}>+</button>
                    </div>
                    <h2 className={styles.total}>TOTAL ${total}</h2>
                    <button className={styles.boton}>comprar</button>
                </div>
            </section>
        </>
    )
}
