import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

const ItemListContainer = () => {

  // Revisar el useEffect con la promesa de abajo y repasar la clase de promesas
    
    const [item, setItem] = useState([]);
    const {id} = useParams();
    
//    useEffect(()=>{
//     const fetchData = async()=>{
//        try{
//        const data = await new Promise((resolve)=>{
//        setTimeout(()=>{
//        resolve(id ? ArrayProductos.filter(item=> item.categoria === id) : ArrayProductos)
//       }, 1100);
//        });
//        setItem(data);
//      }catch(error){
//        console.log('Error:', error);
//      }
//    };
//    fetchData();
// }, [id])
  
useEffect(()=>{
  const querydb = getFirestore();
  const queryCollection = collection(querydb, 'products');
  getDocs(queryCollection)
  .then(res=> setItem(res.docs.map(p=>({id: p.id, ...p.data()}))))
}, [id])

  return (
    <div className='container my-container'>
      <div className='row'>
       <ItemList item={item}/>
      </div>
    </div>
  )
}

export default ItemListContainer;
