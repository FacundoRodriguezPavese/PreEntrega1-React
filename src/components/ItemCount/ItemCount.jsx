import React from "react";
import { useState } from "react";

const ItemCount = ({stockItems, onAdd}) => {

    const [count, setCount] = useState(0);

    const sumar = () => {
        if (count < stockItems) {
            setCount(count + 1);
        } 
    }

    const restar = () => {
        if (stockItems > 1 && count !== 0) {
            setCount(count - 1)
        }
    }

    return(
        <div className="sub-container-itemCount">
            <div className="row mb-3">
                <div>
                    <div className="btn-group">
                        <button type="button" className="my-btn" onClick={restar} >-</button>
                        <button type="button" className="my-btn">{count} </button>
                        <button type="button" className="my-btn" onClick={sumar} >+</button>
                     </div>
                </div>
            </div>
         <div>
            <button type="button" className="my-btn-add" onClick={()=>onAdd(count)}>Agregar al carrito</button>    
                
                </div>
        </div>  
    )
}

export default ItemCount;