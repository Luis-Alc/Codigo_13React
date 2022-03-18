// primer paso para definir un componente es el nombre
// El nombre de un componente siempre debe de iniciar en Mayuscula

import Header from './Header'
import Footer from './Footer'
import FormRegister from './Form'
import FormUser from './FormUser'

//! funcion de react para manejar un estado de una variable
import { useState } from "react"


const PrimerComponente = () => {

  const [count, setCount] = useState(0)

  const sumar = () => setCount(count + 1)
  const restar = () => setCount(count - 1)

  return (
    <div>
      <Header />
      <h1>Hola Mundo</h1>
      {/* <h2>Este es mi primer componente {count}</h2>

      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button> */}

      {/* <FormRegister /> */}
      <hr />
      <FormUser/>
      <Footer />
    </div>
  )
}

export default PrimerComponente