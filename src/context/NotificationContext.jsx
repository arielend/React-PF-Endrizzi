import { createContext, useContext, useState } from 'react'

const NotificationContext = createContext(
    {
        notification: null,
        showNotification: () => {},
    }
)

export const NotificationProvider = ({ children }) => {
    
    const [notification, setNotification] = useState(null)

    const showNotification = (options) => {

        setNotification(options)

        setTimeout(() => {
            setNotification(null)
            }, options.duration)
    }

    return (
        <NotificationContext.Provider value={{ notification, showNotification }}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}