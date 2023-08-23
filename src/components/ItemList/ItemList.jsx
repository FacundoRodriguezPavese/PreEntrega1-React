import React from 'react'
import Item from "../Item/Item";

const ItemList = ({ item }) => {
  return (
    <div className='container'>
      <div className='item-list-container' id='itemlist'>
        {
          item.map(item =>

            <div className='col-md-3 itemlist-item'
              key={item.id}>
              <Item item={item} />
            </div>
          )
        }
      </div>
    </div>
  )
};

export default ItemList;
