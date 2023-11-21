import { useState, createContext, useContext } from "react";

export const CartContext = createContext(
    { 
        cart: [],
        addItem: () => {},
        removeItem: () => {},
        totalQuantity:0
    }
)

export const CartProvider = ({children}) => {

    const [ cart, setCart] = useState([])

    
    
    
    const addItem = (productToAdd) => {

        if(!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } 
        else{
            console.log('El producto ya esta agregado');
        }
    }    
    const isInCart = (id) => {
        return cart.some((prod)=> prod.id === id)
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod=>prod.id !== id)
        setCart(cartUpdated)
    }

    const getTotalQuantity = () => {
        var totalQuantity = 0

        cart.forEach(e => {
            totalQuantity += e.quantity          
        });

        return totalQuantity
    }

    const getTotalPrice = () => {
        var totalPrice = 0

        cart.forEach(e => {
            totalPrice += (e.quantity * e.price)          
        });

        return totalPrice

    }

    const totalQuantity = getTotalQuantity()
    const totalPrice = getTotalPrice()
    
    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}