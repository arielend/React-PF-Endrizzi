import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import Layout from './components/Layout/Layout'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <>
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route exact path={'/'} element={<ItemListContainer greeting={'Todos nuestros productos'}/>}/>
            <Route exact path={'/category/:categoryId'} element={<ItemListContainer greeting={'Acá podes ver nuestros productos por categoría'}/>}/>
            <Route exact path={'/item/:itemId'} element={<ItemDetailContainer greeting={'Detalles del producto'}/>}/>
            <Route exact path={'/cart'} element={<Cart/>}/>
            <Route exact path={'/checkout'} element={<Checkout/>}/>
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
    </>
  )
}

export default App
