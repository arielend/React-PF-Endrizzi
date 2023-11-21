import { useAsync } from '../../hooks/useAsync'
import { getItemById } from '../../services/firebase/firestore/products'
import { useParams } from 'react-router-dom'

import Loader from '../Loader/Loader'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const { itemId } = useParams()
    const asyncFunction = () => getItemById(itemId)
    const {data: item, loading, error } = useAsync(asyncFunction, [itemId])

    console.log(item);

    if (loading) {
        return(
            <Loader/>
        )
    }

    //Revisar por que getDoc trae un doc snapshot aunque en la base no exista un item
    if(!item.name){
        return(
            <h2 style={{fontSize: 40, position:'absolute', top: '40%', left:'50%', transform: 'translateX(-50%)'}}>El producto seleccionado no existe</h2>
        )
    }

    if (error) {
        return(
            <h2 style={{fontSize: 40, position:'absolute', top: '40%', left:'50%', transform: 'translateX(-50%)'}}>Hubo un problema al cargar el producto</h2>
        )
    }

    return(
        <ItemDetail greeting={'Detalle del producto: '} {...item}/>
    )
}

export default ItemDetailContainer