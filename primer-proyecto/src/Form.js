import { useState } from "react"


const FormRegister = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")

    // en react la forma en la cual obtenemos el valor a un input
    // es usando el onChange este evento nos va a permitir capturar el valor
    // de los input


    const handleInputName = (event) => {
        // recordemos que los valores van dentro de los parentesis
        // recordemos que event es solo un nombre , este puede ser cambiado por ejemplo "e"
        setNombre(event.target.value)
    }
    
    const handleInputApellido = (event) => {
        setApellido(event.target.value)
    }
    

    return (
        <div>
            <form action="">
                <h4>Formulario de registro</h4>
                <h4>Nombre {nombre} {apellido}</h4>
                <p><input type="text" onChange={handleInputName} placeholder="Ingrese su nombre" /></p>
                <p><input type="text" onChange={handleInputApellido}  placeholder="Ingrese su apellido" /></p>
                <p><input type="email" placeholder="Ingrese su email" /></p>
                <p><input type="password" placeholder="Ingrese su password" /></p>
                <p><button type="submit">Enviar</button></p>
            </form>
        </div>
    )
}
export default FormRegister