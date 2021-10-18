import { useState, createContext } from 'react'
import Cookies from 'js-cookie'

export const Context = createContext(null)

const Provider = props => {
    const [user, setUser] = useState(Cookies.get('authenticatedUser') || null)

    const handleLogin = loggedInUser => {
        if (loggedInUser) {
            setUser(loggedInUser.profile)
            Cookies.set('authenticatedUser', JSON.stringify(loggedInUser.profile))
        }
    }

    const handleLogOut = () => {
        setUser(null)
        Cookies.remove('authenticatedUser')
    }

    return(
        <Context.Provider value={ { user, actions: { login: handleLogin, logout: handleLogOut } } }>
            { props.children }
        </Context.Provider>
    )
}

export default Provider