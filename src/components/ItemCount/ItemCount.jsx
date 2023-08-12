import React from "react";
import { useState } from "react";

const ItemCount = ({stockItems}) => {

    const [counter, setCounter] = useState(0);

    const sumarStock = () => {
        if (counter < stockItems) {
            setCounter(counter + 1);
        } 
    }

    const restarStock = () => {
        if (stockItems > 1 && counter !== 0) {
            setCounter(counter - 1)
        }
    }

    return(
        <div className="container" id="itemcount">
            <div className="row mb-3">
                <div className="col-md-2">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={restarStock} >-</button>
                        <button type="button" className="btn btn-outline-primary">{counter} </button>
                        <button type="button" className="btn btn-outline-primary" onClick={sumarStock} >+</button>
                     </div>
                </div>
            </div>
         <div className="row">
         <div className="col-md-2">
            <button type="button" className="btn btn-outline-primary">Agregar al carrito</button>    
                
                </div>
            </div>
        </div>  
    )
}

export default ItemCount;