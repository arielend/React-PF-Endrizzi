import classes from '../Item/item.module.css'
import StockLess from './assets/stockLess.svg'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price, stock}) => {
    return(
        <div className={classes.itemCard}>
            <h2>{name}</h2>
            {stock == 0 && <img className={classes.sinStock} src={StockLess} alt="Sin stock" />}
            <img className={classes.cardImg} src={img} alt="" />
            <h3>Precio: $ {price}</h3>
            <h3>Stock: {stock}</h3>
            <Link to={`/item/${id}`} className={classes.itemCardButton}>Ver detalle</Link>
        </div>
    )
}

export default Item