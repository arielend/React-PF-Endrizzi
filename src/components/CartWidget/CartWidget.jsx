import cartIcon from './assets/icon-cart.svg'
import classes from './cartWidget.module.css'

import { useCart } from '../../context/CartContext'

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return(
        <>
        <button className={classes.cartWidget}>
            <img src={cartIcon} alt='Carrito de compras'/>
            <span>{totalQuantity}</span>            
        </button>
        </>
    )
}

export default CartWidget