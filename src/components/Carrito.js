import React, { useState } from 'react'

const Carrito = () => {
    const [carrito, setCarrito] = useState(0)

    const sumarUno = () => {setCarrito(carrito +1)}
    const restarUno = () => {setCarrito(carrito -1)}
  return (
    <div>
      <span>
        <span>{carrito}</span>
        <button onClick={restarUno}>Restar</button>
        <button onClick={sumarUno}>Sumar</button>
      </span>
    </div>
  )
}

export default Carrito
