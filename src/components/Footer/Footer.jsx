import classes from './footer.module.css'

const Footer = () => {
    return(
        <footer className={classes.footer}>
            <p className={classes.footer__p}>Proyecto Tecno Tienda</p>
            <p className={classes.footer__p}>
                Curso React - <a href="https://www.coderhouse.com/" target='_blank' rel='noreferrer'><b>Coderhouse</b></a> - Comision 58160
            </p>
            <p className={classes.footer__p}>
                Desarrollado por <a href='https://github.com/arielend' target='_blank' rel='noreferrer'><b>ArielEnd</b></a>                
            </p>
        </footer>
    )
}

export default Footer