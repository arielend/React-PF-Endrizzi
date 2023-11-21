import { Link } from "react-router-dom";
import classes from './linkButton.module.css'

const LinkButton = ({path, label}) => {
    return(
        <Link role="button" className={classes.linkButton} to={path}>
            {label}
        </Link>
    )
}

export default LinkButton