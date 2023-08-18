import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Cart = () => {

  const { cart } = useContext(CartContext);
  console.log('Carrito desde cart:', cart);

  return (
    <>
      <h1>Carrito</h1>
      {
        cart.length === 0 ? <h3>El carrito esta vacio</h3>
          : <div>
            <h1>Pedido:</h1>
            {cart.map((unItem) => <>
              <div>
                <h2>{unItem.name}</h2>
                <img src={unItem.img} alt="" />
                <h5>Cantidad: {unItem.cant}</h5>
                <h5>Precio: ${unItem.price}</h5>
                <hr /><br />
              </div>
            </>)}
          </div>
      }

      <div>
        <NavLink to={"/checkout"} > Confirmar compra </NavLink>
      </div>
    </>
  )
}

export default Cart
