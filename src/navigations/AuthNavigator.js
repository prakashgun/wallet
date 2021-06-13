import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import Register from '../screens/Register'


export default function AuthNavigator() {
    const HomeStack = createStackNavigator()

    return (
        <HomeStack.Navigator screenOptions={{headerShown: false}}>
            <HomeStack.Screen name="Login" component={Login}></HomeStack.Screen>
            <HomeStack.Screen name="Register" component={Register}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
}

const styles = StyleSheet.create({})
