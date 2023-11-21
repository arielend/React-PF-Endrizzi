import classes from './itemList.module.css'
import Item from '../Item/Item'
import Item2 from '../Item2/Item2'

const ItemList = ({products}) => {
    return(
        <div className={classes.itemList}>
            {
                products.map(prod => {
                    return(
                        <Item2 key={prod.id} {...prod}/>
                    )
                })
            }
        </div>
    )
}

export default ItemList 