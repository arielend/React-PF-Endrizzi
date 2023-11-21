import StockLess from './assets/stockLess.svg'
import Disc10off from './assets/10off.svg'
import Disc20off from './assets/20off.svg'
import Disc30off from './assets/30off.svg'
import Disc40off from './assets/40off.svg'
import Disc50off from './assets/50off.svg'
import classes from './item2.module.css'

import { Link } from 'react-router-dom'

const Item2 = ({id, name, img, price, stock, discount}) => {

    if(discount){
        var disc = 0
        switch(discount){
            case 10:
                disc = Disc10off
                break
            case 20:
                disc = Disc20off
                break
            case 30:
                disc = Disc30off
                break
            case 40:
                disc = Disc40off
                break
            case 50:
                disc = Disc50off
        }
    }

    return(
        
        <div className={classes.glassCard}>
            <h2>{name}</h2>
            {stock == 0 && <img src={StockLess} className={classes.card__stockBanner} alt="Banner sin stock"/>}
            {
                discount && <img src={disc} className={classes.card__discountBanner} alt="Banner descuento"/>            
            }            
            <img className={classes.card__image} src={img} alt="Memoria ram"/>
            <div className={classes.card__description}>
                <p className={classes.card__description__p}>
                   Precio: $ {price}
                </p>                
            </div>
            <Link to={`/item/${id}`} className={classes.card__button}>Ver detalle</Link>
        </div>

    )
}

export default Item2