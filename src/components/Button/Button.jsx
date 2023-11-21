import classes from './button.module.css'

const Button = ({type, label, callback, disabled}) => {
    
    if(disabled){
        return(
            <button type={type} onClick={callback} className={classes.button} disabled>{label}</button>
        )    
    }else{
        return(
            <button type={type} onClick={callback} className={classes.button}>{label}</button>
        )
    }
}

export default Button