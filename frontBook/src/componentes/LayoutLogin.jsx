import booklogin from '../assets/booklogin.png'
import logo from '../assets/logo.webp'
import volando from '../assets/librosvolando.webp'
import styles from'../stylepages/loginLayout.module.css'

export default function LayoutLogin({title,children}) {
    return (
        <>
            <main className={styles.login}>
                <div className={styles.izquierda}>
                    <div>
                        <div className={styles.encabezado}>
                            <img className={styles.logo} src={logo} alt='logo' />
                            <h1>BookStore</h1>
                        </div>

                        <h2 className='titulo'>{title}</h2>
                        <section className={styles.contenedor}>
                            {children}
                          
                        </section>
                    </div>
                </div>

                <div className={styles.derecha}>

                    <img className={styles.book} src={booklogin} alt='portadalogin' />
                    <img className={styles.book} src={volando} alt='voolando' />

                </div>
            </main>
        </>
    )
}