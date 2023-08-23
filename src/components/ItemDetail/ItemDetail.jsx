import React, { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { NavLink } from 'react-router-dom'

const ItemDetail = ({item}) => {

  const {addItem} = useContext(CartContext)


  const handleOnAdd =(count)=> {
    if (count !== 0) {
      
    addItem({id: item.id, name: item.title, price: item.price, img: item.img, cant: item.cant}, count)
    }
  }

  return (
    <div className='row itemDetail-container'>
     <div className='col-md-4 offset-md-4'>
        <img src={item.img} className='img-fluid'alt={item.title}/>
        <h2>{item.title}</h2>
        <h3>{item.description}</h3>
        <h4>Precio: ${item.price}</h4>
        <p>Cantidad: {item.stock}</p>
     </div>
     <div className='container-itemCount'>
      <ItemCount stockItems={10} onAdd={handleOnAdd} initial={1}/>
      <button className='btn-finalizar'>{<NavLink className='finalizar-a text-decoration_none' to={'/Cart'}> Finalizar compra </NavLink>}</button>
     </div>
    </div>
  )
}

export default ItemDetail
