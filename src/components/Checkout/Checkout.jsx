import React, { useState, useSyncExternalStore } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const Checkout = () => {

  const [comprador, setComprador] = useState({
    Nombre: "",
    Email: "",
    Telefono: ""
  })

  const [item, setItem] = useState([
    { id: 1, nombre: "Simple cheese burguer", precio: 1100, cant: 3 }
  ])

  const handleInputChange = (e) => {
    setComprador({
      ...comprador,
      [e.target.name]: e.target.value
    })
    console.log(comprador);
  }

  const [orderId, setOrderId] = useState()

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const total = item.reduce((acum, unItem) => acum + (unItem.precio * unItem.cant), 0);
    const fecha = new Date()
    const data = { comprador, item, total, fecha };
    generateOrder(data);
  }

  const generateOrder = async (data) => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "Orders");
    const order = await addDoc(queryCollection, data);
    console.log("Order:", order.id);
    setOrderId(order.id)
  }

  const { Nombre, Email, Telefono } = comprador


  return (
    <>
      <div><h2>Formulario</h2></div>
      <hr />
      {!orderId && <form onSubmit={handleInputSubmit}>
        <input type='text'
          name='Nombre'
          placeholder='Nombre'
          value={Nombre}
          onChange={handleInputChange}
          required
        /> <br /><br />
        <input type='email'
          name='Email'
          placeholder='Email'
          value={Email}
          onChange={handleInputChange}
          required
        /> <br /><br />
        <input type='number'
          name='Telefono'
          placeholder='Telefono'
          value={Telefono}
          onChange={handleInputChange}
          required
        />  <br /><br />
        <input type='submit'
          value="Confirmar compra"
        />
      </form>}
        {orderId && 
        <>
          <h3>Realizaste tu compra con exito</h3> <br />
          <h4>El ID de tu compra es: {orderId}</h4>
        </>}
    </>
  )
}

export default Checkout
