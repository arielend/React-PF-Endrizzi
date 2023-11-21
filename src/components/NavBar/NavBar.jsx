import { Link, NavLink } from "react-router-dom"
import { useAsync } from "../../hooks/useAsync"
import { getCategories } from "../../services/firebase/firestore/categories"

import classes from './navBar.module.css'
import logoTienda from './assets/tecno-tienda.svg'

import CartWidget from '../CartWidget/CartWidget'
import Loader from "../Loader/Loader"

const NavBar = () => {

    const asyncFunction = () => getCategories()    
    const {data: categories, loading, error} = useAsync(asyncFunction,[])

    if(loading) {
        return(
            <Loader/>
        )
    }

    if (error) {
        return(
            <h3>Hubo un problema al cargar el nav</h3>
        )
    }

    return(
        <>
        <nav className={classes.navBar}>
            <Link to={'/'}>
                <img className={classes.imageLink} src={logoTienda} alt="Logo Tecno-Tienda" />
            </Link>
            <section className={classes.nav}>
                {
                    categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.slug}`} 
                    className={({ isActive }) => isActive ? `${classes.navLink} ${classes.current}` : classes.navLink}>{cat.name}</NavLink>)
                }
            </section>
            <Link to={'/cart'}>
                <CartWidget/>
            </Link>
        </nav>
        </>
    )
}

export default NavBar