import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeNavigator from './HomeNavigator'


export default function DrawerNavigator() {
    const Drawer = createDrawerNavigator()

    const NavItems = ({navigation}) =>  {
        return <View>
            <Text>
                Logout
            </Text>
        </View>
    }

    const getDrawerContent = (navigation) => {
        return <NavItems navigation={navigation}></NavItems>
    }

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home Navigator" component={HomeNavigator}></Drawer.Screen>
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({})
