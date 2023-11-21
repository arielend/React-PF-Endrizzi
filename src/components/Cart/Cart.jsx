import LinkButton from '../LinkButton/LinkButton'
import Button from '../Button/Button'

import { useCart } from '../../context/CartContext'
import trashIcon from './assets/garbage.svg'
import emptyCart from './assets/emptyCart2.jpg'
import classes from './cart.module.css'

const Cart = () => {
    
    const {cart, removeItem, clearCart, totalPrice} = useCart()

    return(
        <>
        <div className={classes.cart}>
            {
                cart.length !== 0 ?
                <>
                    <h1>Revisá tu carrito antes de confirmar</h1>

                    <div className={classes.cartList}>

                        <table style={{width: 900}}>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Cantidad</th>
                                    <th>Precio U.</th>
                                    <th>Subtotal</th>
                                    <th>Quitar</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                cart.map(prod => {
                                    return(
                                        <tr key={prod.id}>
                                            <td className={classes.tableRowName}>{prod.name}</td>
                                            <td>{prod.quantity}</td>
                                            <td>$ {prod.price}</td>
                                            <td>$ {prod.price * prod.quantity}</td>
                                            <td>
                                                <button className={classes.closeButton} onClick={() => removeItem(prod.id)} title='Eliminar item'>
                                                    <img className={classes.closeButtonImg} src={trashIcon} alt="Trush icon"/>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>

                        <h2>Total de la compra ${totalPrice}</h2>
                        
                        <div className={classes.cartControl}>
                            <LinkButton path={'/checkout'} label={'Crear orden'}/>
                            <Button label={'Vaciar carrito'} callback={clearCart}/>
                            <LinkButton path={'/'} label={'Volver'}/>
                        </div>
                        
                    </div>
                </>
                :
                <>

                    <div className={classes.emptyCart}>
                        <h1>La vista es genial, pero tu carrito...</h1>
                        <img className={classes.emptyCartImg} src={emptyCart} alt='Carrito vacio'/>
                    </div>

                    <div className={classes.cartControl}>
                        <LinkButton path={'/'} label={'Volver'}/>
                    </div>
                
                </>
            }           
            
        </div>
        </>
    )
}

export default Cart