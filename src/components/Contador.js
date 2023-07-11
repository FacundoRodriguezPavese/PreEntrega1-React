// CONTADOR DE LA CLASE 3 

import { useState } from "react";

const Contador = ()=> {
    const [contador, setContador] = useState(0);

    const sumarUno = () => {
        setContador(contador + 1)
    }
    const restarUno = () => {
        setContador(contador - 1)
    }

    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={sumarUno}>Sumar</button>
            <button onClick={restarUno}>Restar</button>            
        </div>
    )
}

export default Contador;