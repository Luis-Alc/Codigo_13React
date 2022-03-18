import { useState } from "react"
import { TextField, Button } from "@mui/material"
const FormUser = () => {
    const [valorDeInput, setValorDeInput] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        password: ""
    })

    const handleInputValues = (e) => {
        const { name, value } = e.target
        setValorDeInput({
            ...valorDeInput,
            [name]: value
        })
    }
    return (
        <div>
            <form action="">
                <h4 className="title">Formulario de Usuario</h4>

                <h5>Nombre {valorDeInput.nombre}</h5>
                <h5>Apellido {valorDeInput.apellido}</h5>
                <h5>Correo {valorDeInput.correo}</h5>
                <h5>Password {valorDeInput.password}</h5>


                <p><TextField name="nombre" type="text" onChange={handleInputValues} label="Ingrese su nombre" /></p>
                <p><TextField name="apellido" type="text" onChange={handleInputValues} label="Ingrese su apellido" /></p>
                <p><TextField name="correo" type="email" onChange={handleInputValues} label="Ingrese su email" /></p>
                <p><TextField name="password" type="password" onChange={handleInputValues} label="Ingrese su password" /></p>
                <p><button type="submit">Enviar</button></p>
            </form>
        </div>
    )
}
export default FormUser