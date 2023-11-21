import { useNotification } from '../../context/NotificationContext'
import exclamation from './assets/alert-exclamation.svg'
import interrogation from './assets/alert-interrogation3.svg'

import classes from './notification.module.css'

const Notification = () => {

    const { notification } = useNotification()

    if (!notification) return null

    return (
        
        <div className={classes.notification}>
            <div className={classes.notificationIconBox}>
                {
                    notification.icon == 'exclamation' ?
                    <img className={classes.notificationIcon} src={exclamation} alt='alert icon'/>
                    : <img className={classes.notificationIcon} src={interrogation} alt='alert icon'/>
                }
            </div>
            <div className={classes.notificationMessageBox}>
                <span>{notification.message}</span>
            </div>
        </div>
        
    )
}

export default Notification