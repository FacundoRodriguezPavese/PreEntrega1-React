import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getFirestore, getDocs, collection, where, query } from 'firebase/firestore';
import { Spinner } from 'reactstrap';

const ItemListContainer = () => {

  // Revisar el useEffect con la promesa de abajo y repasar la clase de promesas

  const {categoryId} = useParams();


  const [item, setItem] = useState([]);
  const [load, setLoad] = useState(true);

  
  const getData = async (categoria) => {
    const querydb = getFirestore();
    const queryCollection = categoria ? query(collection(querydb, 'products'), where("categoryId", "==", categoria)) 
                                      : collection(querydb, 'products');
    const resultado = await getDocs(queryCollection)
    const datos = resultado.docs.map(product => ({id: product.id, ...product.data()}))
    setItem(datos)
    setLoad(false)
  }



useEffect(()=>{
  getData(categoryId)
}, [categoryId])

  return (
    <>
      {load ? <Spinner/> 
            : <ItemList item={item}/>}
    </>
  )
}

export default ItemListContainer;
    


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