import ItemList from '../ItemList/ItemList'
import Loader from '../Loader/Loader'

import { useAsync } from '../../hooks/useAsync'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore/products'

const ItemListContainer = ({greeting}) => {

    const {categoryId} = useParams()
    const asyncFunction = () => getProducts(categoryId) //(categoryId ? getProductsByCategory(categoryId) : getProducts())
    const {data: products, loading, error} = useAsync(asyncFunction, [categoryId])

    switch(categoryId){
        case 'motherboards':
            document.title = 'Tecno Tienda | Motherboards'
            break
        case 'videocards':
            document.title = 'Tecno Tienda | Placas de Video '
            break
        case 'processors':
            document.title = 'Tecno Tienda | Procesadores '
            break
        case 'ram':
            document.title = 'Tecno Tienda | Memorias '
            break
        default:
            document.title = 'Tecno Tienda | Inicio '
            break
    }

    if(loading){
        return(
            <Loader/>
        )
    }

    if(error){
        return(
            <h1 style={{fontSize: 40, position:'absolute', top: '40%', left:'50%', transform: 'translateX(-50%)'}}>
                Ocurrió un error al cargar los productos
            </h1>
        )
    }

    if(products.length === 0){
        return(
            <h1 style={{fontSize: 40, position:'absolute', top: '40%', left:'50%', transform: 'translateX(-50%)'}}>
                No hay productos que mostrar en esta categoría
            </h1>
        )
    }

    
    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
    
}

export default ItemListContainer