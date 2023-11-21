import NavBar from '../NavBar/NavBar'
import classes from './header.module.css'

const Header = () => {
    return(
        <header className={classes.header}>
            <NavBar/>
        </header>
    )
}

export default Header