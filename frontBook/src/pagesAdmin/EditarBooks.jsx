import { useEffect, useState } from "react";
import FormBook from "../componentes/FormBook";
import { useNavigate, useParams } from "react-router-dom";
import useGetByIdBook from "../hooks/useGetByIdBook";
import patchBook from "../services/patchBook";
import Alert from "../componentes/Alert";

export default function EditarBooks() {
    const { id } = useParams();
    const data = useGetByIdBook(id);
    const [editar, setEditar] = useState(false);
    const [respuesta, setRespuesta] = useState(null);
    const [mensaje, setMensaje] = useState("");
    const [formDatos, setFormDatos] = useState(
        data || {
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
    const navigate = useNavigate();

    useEffect(() => {
        if (data) {
            setFormDatos(data);
        }
    }, [data]);

    async function editarBook(data) {
        try {
            const response = await patchBook(data._id, data);
            if (response.ok) {
                setRespuesta({ ok: true });
                setMensaje("actualizacion exitosa");
            } else {
                setRespuesta({ ok: false });
                setMensaje("error al actualizar");
            }
        } catch (error) {
            console.log(error);
            setRespuesta({ ok: false });
            setMensaje("error server");
        }
        console.log("en editar libro");
    }

    function switchEditar() {
        setEditar(!editar);
    }

    return (
        <>
            <h1 className="titulo">Edición</h1>
            <Alert mensaje={mensaje} respuesta={respuesta} limpiar={() => {
                setMensaje(""); setRespuesta(null);
            }} />

            <FormBook
                datoInicial={formDatos}
                funcion={editarBook}
                editar={editar}
            >
                {editar ?
                    (
                        <>
                            <button
                                onClick={switchEditar}
                                className="botones">
                                edición habilitado
                            </button>
                            <button 
                                type="submit"
                                className="botones">
                                guardar
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={switchEditar}
                            type="submit"
                            className="botones">
                            edición inhabilitado
                        </button>

                    )}
            </FormBook>
        </>
    )
}