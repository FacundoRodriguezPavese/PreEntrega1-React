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
        <div className="container" id="itemcount">
            <div className="row mb-3">
                <div className="col-md-2">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={restar} >-</button>
                        <button type="button" className="btn btn-outline-primary">{count} </button>
                        <button type="button" className="btn btn-outline-primary" onClick={sumar} >+</button>
                     </div>
                </div>
            </div>
         <div className="row">
         <div className="col-md-2">
            <button type="button" className="btn btn-outline-primary" onClick={()=>onAdd(count)}>Agregar al carrito</button>    
                
                </div>
            </div>
        </div>  
    )
}

export default ItemCount;