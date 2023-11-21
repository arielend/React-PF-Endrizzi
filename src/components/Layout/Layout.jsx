import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import classes from './layout.module.css'
import Notification from '../Notification/Notification'

import { NotificationProvider } from '../../context/NotificationContext'

const Layout = ({children}) => {
    return(
        <NotificationProvider>
        <>
            <Header/>
            <main className={classes.main}>
                <Notification/>
                {children}
            </main>
            <Footer/>
        </>
        </NotificationProvider>
    )
}

export default Layout