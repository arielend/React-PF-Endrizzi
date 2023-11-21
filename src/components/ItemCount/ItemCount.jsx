import { useCount } from '../../hooks/useCount'
import classes from './itemCount.module.css'
import IconMinus from './assets/icon-minus.svg'
import IconPlus from './assets/icon-plus.svg'

const ItemCount = ({stock, onAdd}) => {

    const {count, decrement, increment} = useCount((stock>0 ? 1 : 0), stock)

    return(
        <div className={classes.itemCount}>
            <div className={classes.counter}>
                <button className={classes.itemCountButton} onClick={decrement} disabled={stock==0}>
                    <img className={classes.icon} src={IconMinus} alt="Icon minus"/>
                </button>
                <label className={classes.itemCountLabel}>{count}</label>
                <button className={classes.itemCountButton} onClick={increment} disabled={stock==0}>
                    <img className={classes.icon} src={IconPlus} alt="Icon plus"/>
                </button>
            </div>
            <div className={classes.adder}>
                <button className={classes.itemAddButton} onClick={() => onAdd(count)} disabled={count==0}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount