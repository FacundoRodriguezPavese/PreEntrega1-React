import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, cant) => {
        if (!cart.some(unItem => unItem.id === item.id)) {
            setCart([...cart, { ...item, cant }])
        }
        else {
             setCart([...cart]) // No sé como modificar la cantidad de un item ya agregado al carrito
        }
    }

    useEffect(() => {
      console.log('El carrito contiene:', cart)
    }, [cart])
    


    return (
        <CartContext.Provider value={{ cart, addItem }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider