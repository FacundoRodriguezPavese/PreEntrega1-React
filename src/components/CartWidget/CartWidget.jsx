import React from 'react';
import { TfiShoppingCart } from 'react-icons/tfi';

const CartWidget = () => {


  return (
    <div>
      <TfiShoppingCart className='cartWidget' />
      <span className='cartWidget'>0</span>
    </div>
  )
}

export default CartWidget;
