import { useEffect, useState } from "react"
import styles from "../stylepages/formBook.module.css"
import { data, useNavigate } from "react-router-dom";
export default function FormBook({ datoInicial, funcion, editar,crear, children }) {
    const [formDatos, setFormDatos] = useState(
        datoInicial ||
        {
            title: "",
            author: "",
            description: "",
            editorial: "",
            type: "",
            genre: "",
            language: "",
            publishedYear: "",
            price: "",
            stock: "",
            bookImage: "",
        });

    useEffect(() => {
        if (datoInicial) {
            setFormDatos(datoInicial);
        }
    }, [datoInicial]);

    if(crear){
        editar = true
    }
    /*
    if(!formDatos) return <h3>cargando datos</h3>
    */
    const opcionesTipos = ["libro", "manga"];
    const opcionesGenero = [
        'fantasia',
        'ciencia-ficcion',
        'misterio',
        'romance',
        'horror',
        'historico',
        'juvenil',
        'filosofia'];
    const opcionesLenguaje = [
        'español',
        'ingles',
        'chino',
        'frances'
    ]

    function handleSubmit(e) {
        e.preventDefault();
        funcion(formDatos);
    }
    function handleChange(e) {
        const { id, value } = e.target;
        setFormDatos({
            ...formDatos,
            [id]: value
        })
    }
    return (
        <>
            <div className={styles.contenedor}>
                <form
                    onSubmit={handleSubmit}
                    className={`${styles.form} form`}>
                    <div className={styles.caja}>
                        <div className={styles.uno}>
                            <label>Titulo:</label>
                            <input
                                className="inputs"
                                type="text"
                                id="title"
                                value={formDatos.title}
                                onChange={handleChange}
                                required
                                disabled={!editar} />
                            <label>Autor:</label>
                            <input
                                className="inputs"
                                type="text"
                                id="author"
                                value={formDatos.author}
                                onChange={handleChange}
                                required
                                disabled={!editar} />
                            <label>Descripción:</label>
                            <input
                                className="inputs"
                                type="text"
                                id="description"
                                value={formDatos.description}
                                onChange={handleChange}
                                required
                                disabled={!editar} />
                            <label>Editorial:</label>
                            <input
                                className="inputs"
                                type="text"
                                id="editorial"
                                value={formDatos.editorial}
                                onChange={handleChange}
                                required
                                disabled={!editar} />
                            <label>Tipo:</label>
                            <select
                                className="inputs"
                                id="type"
                                value={formDatos.type}
                                onChange={handleChange}
                                required
                                disabled={!editar}
                            >
                                <option value="" disabled>seleciona que tipo es</option>
                                {opcionesTipos.map((tipo, index) => (
                                    <option key={index} value={tipo}>
                                        {tipo}
                                    </option>
                                ))}
                            </select>
                            <label>/portadas/books/</label>
                            <label>/portadas/mangas/</label>
                        </div>
                        <div className={styles.dos}>
                            <label>Genero:</label>
                            <select
                                className="inputs"
                                id="genre"
                                value={formDatos.genre}
                                onChange={handleChange}
                                required
                                disabled={!editar}>
                                <option value="" disabled>Seleccione el Genero</option>
                                {opcionesGenero.map((genero, index) => (
                                    <option key={index} value={genero}>
                                        {genero}
                                    </option>
                                ))}
                            </select>
                            <label>Lenguaje:</label>
                            <select
                                className="inputs"
                                id="language"
                                value={formDatos.language}
                                onChange={handleChange}
                                required
                                disabled={!editar}>
                                <option value="" disabled >Seleccione el Idioma</option>
                                {opcionesLenguaje.map((idioma, index) => (
                                    <option key={index} value={idioma}>{idioma}</option>
                                ))}
                            </select>
                            <label>Año de publicación:</label>
                            <input
                                placeholder="mayor a mil"
                                className="inputs"
                                type="number"
                                id="publishedYear"
                                value={formDatos.publishedYear}
                                onChange={handleChange}
                                required
                                disabled={!editar} />
                            <label>Precio:</label>
                            <input
                                className="inputs"
                                type="number"
                                id="price"
                                value={formDatos.price}
                                onChange={handleChange}
                                required
                                disabled={!editar} />
                            <label>Stock:</label>
                            <input
                                className="inputs"
                                type="number"
                                id="stock"
                                value={formDatos.stock}
                                onChange={handleChange}
                                required
                                disabled={!editar} />
                            <label>Direccion de imagen</label>
                            <input
                                placeholder="/portadas/"
                                className="inputs"
                                type="text"
                                id="bookImage"
                                value={formDatos.bookImage || ""}
                                onChange={handleChange}
                                required
                                disabled={!editar}
                            />
                        </div>
                    </div>
                    {children}

                    {/*
                    {crear && <button className="botones" type="submit">Registrar Libro</button>}

                    {editar ? (
                        <>
                            <button
                                className="botones"
                                type="button"
                                onClick={cambiar}>
                                edición habilitada
                            </button>
                            <button
                                type="submit"
                                className="botones">
                                guardar
                            </button>
                        </>
                    ) : (
                        <button
                            className="botones"
                            type="button"
                            onClick={cambiar}>
                            edición desabilitada
                        </button>
                    )}
                    */}
                </form>
            </div >
        </>
    )
}