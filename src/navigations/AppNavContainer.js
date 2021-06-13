import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import GlobalContext from '../context/GlobalContext'
import AuthNavigator from './AuthNavigator'
import DrawerNavigator from './DrawerNavigator'

export default function AppNavContainer() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const { auth: { isLoggedIn } } = useContext(GlobalContext)

    const getUser = async () => {
        AsyncStorage.getItem("user") ? setIsAuthenticated(true) : setIsAuthenticated(false)
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <NavigationContainer>
            {isLoggedIn || isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})