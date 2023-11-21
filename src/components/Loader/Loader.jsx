import spinner from './assets/spinner-3.svg'
import classes from './loader.module.css'

const Loader = () => {
    return(
        <div className={classes.spinner}>
            <img className={classes.spinner__img} src={spinner} alt="spinner" />
            <span className={classes.spinner__span}>Loading</span>
        </div>
    )
}

export default Loader