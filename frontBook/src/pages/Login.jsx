import { useContext, useState } from 'react'
import { DatosUserContext } from '../context/UserContext'
import LayoutLogin from '../componentes/LayoutLogin'
import { Link } from 'react-router-dom';

//separar sign in y sign up
export default function Login() {
    const { signUser } = useContext(DatosUserContext);
    const [error, setError] = useState("");
    const [dataUser, setDataUser] = useState({
        "email": "",
        "password": ""
    });

    async function manejarSubmit(e) {
        e.preventDefault();
        try {
            const response = await signUser(dataUser);
            if(!response.ok){
                setError(response.data.error);
                console.log(response);
            }
        } catch (error) {
            setError(error.message);
        }
    }

    function manejarChange(e) {
        //objeto, propiedades, nombre valor
        //e.target tiene los datos
        //prev es el estado anterior
        //se copia las propiedades y actualizamos
        //la que coicide con "name"
        const { name, value } = e.target;
        setDataUser((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    return (
        <>
            <LayoutLogin title={"Iniciar Sesion"}>
                <form onSubmit={manejarSubmit} className='form'>
                    <input
                        className='inputs'
                        name='email'
                        placeholder='email'
                        value={dataUser.email}
                        onChange={manejarChange} required />
                    <input
                        className='inputs'
                        name='password'
                        placeholder='password'
                        type='password'
                        value={dataUser.password}
                        onChange={manejarChange} required />

                    {error &&
                        <span>{error} <br /> </span>}
                    <span>¿NO TENES CUENTA? <Link to={'/register'}>registrate</Link></span>
                    <button type='submit' className='botones'>Sign In</button>
                </form>
            </LayoutLogin>
        </>
    )
}