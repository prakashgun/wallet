import React, { useReducer } from 'react'
import GlobalContext from './GlobalContext'
import authState from './initialStates/authState'
import authReducer from './reducers/authReducer'
import contactsReducer from './reducers/contactsReducer'


const GlobalProvider = ({ children }) => {
    const [auth, authDispatch] = useReducer(authReducer, authState)

    return <GlobalContext.Provider value={{ auth, authDispatch }}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalProvider