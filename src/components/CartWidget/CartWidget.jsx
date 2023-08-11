import React, { useContext } from 'react';
import { TfiShoppingCart } from 'react-icons/tfi';
import { CountContext } from '../../context/CountContext';

const CartWidget = () => {

  const countItem = useContext(CountContext)

  return (
    <div>
      <TfiShoppingCart />
      <span>{countItem}</span>
    </div>
  )
}

export default CartWidget;
