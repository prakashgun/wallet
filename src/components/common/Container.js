import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function Container({children}) {
    return (
        <ScrollView>
            <View style={styles.wrapper}>{children}</View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        padding: 5
    }
})
