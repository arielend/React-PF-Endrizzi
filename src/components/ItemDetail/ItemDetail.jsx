import { useCart } from '../../context/CartContext'
import { useNotification } from '../../context/NotificationContext'

import ItemCount from '../ItemCount/ItemCount'
import LinkButton from '../LinkButton/LinkButton'
import classes from './itemDetail.module.css'

const ItemDetail = ({id, name, img, price, stock, description, greeting}) => {

    const { addItem, cart } = useCart()
    const { showNotification } = useNotification()

    const inCart = cart.map((prod)=>prod.id)
    
    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity, 
        }
        addItem (productToAdd)

        showNotification(
            {
                message: `${quantity} ${name} agregado/s`,
                duration: 3000,
                icon: 'exclamation',
        });
    }

    return(
        <>
            <h1>{greeting} {id}</h1>
            <div className={classes.itemDetail}>
                <div className={classes.itemDetailImg}>
                    <img className={classes.img} src={img} alt={name} />
                </div>
                <div className={classes.itemDetailDesc}>
                    <h2 style={{textAlign:'center'}}>{name}</h2>
                    <h3>Precio: ${price}</h3>
                    <h3>Stock: {stock}</h3>
                    <p><b>Descripción:</b> {description}</p>
                    {                        
                        !inCart.some(item => item === id) ?
                        <ItemCount stock={stock} onAdd={handleOnAdd}/>
                        : <LinkButton path={'/cart'} label={'Comprar'}/>
                    }
                    <LinkButton path={'/'} label={'Volver'}/>
                </div>
            </div>
        </>
    )
}

export default ItemDetail