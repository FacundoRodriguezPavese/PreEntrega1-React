import React, { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({item}) => {

  const {addItem} = useContext(CartContext)


  const handleOnAdd =(count)=> {
    if (count !== 0) {
      
    addItem({id: item.id, name: item.title, price: item.price, img: item.img, cant: item.cant}, count)
    }
  }

  return (
    <div className='row'>
     <div className='col-md-4 offset-md-4'>
        <img src={item.img} className='img-fluid'alt={item.title}/>
        <h2>{item.title}</h2>
        <h3>{item.description}</h3>
        <h4>Precio: ${item.price}</h4>
        <p>Cantidad: {item.stock}</p>
     </div>
     <div>
      <ItemCount stockItems={10} onAdd={handleOnAdd} initial={1}/>
     </div>
    </div>
  )
}

export default ItemDetail
