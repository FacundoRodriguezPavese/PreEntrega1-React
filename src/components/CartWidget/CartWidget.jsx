import React, { useContext } from 'react';
import { TfiShoppingCart } from 'react-icons/tfi';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

  const { getQuantity } = useContext(CartContext)

  return (
    <div>
      <TfiShoppingCart className='cartWidget' />
      <span className='cartWidget'>{getQuantity()}</span>
    </div>
  )
}

export default CartWidget;
