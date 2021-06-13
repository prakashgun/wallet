import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import Home from '../screens/Home'

export default function HomeNavigator() {
    const HomeStack = createStackNavigator()

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
}

const styles = StyleSheet.create({})
