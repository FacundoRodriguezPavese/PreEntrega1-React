import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const {id} = useParams();
  
    // useEffect(()=>{
    //  const promesa = new Promise((resolve)=>{
    //    setTimeout(()=>{
    //      resolve(ArrayProductos.find(item=> item.id === parseInt(id)))
    //    }, 1200)
    //  });
    //  promesa.then((data)=>{
    //    setItem(data)
    //  })
    //  }, [id])

    
    useEffect(()=>{
      const querydb = getFirestore();
      const queryDoc = doc(querydb, 'products', 'Bak3sZ66Mhq6IQla5xSt');
      getDoc(queryDoc)
      .then(res=> setItem(({id: res.id, ...res.data()})))
      }, [id])
  
  return (
    <div className='container'>
        <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer
