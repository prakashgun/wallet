import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function CustomButton({title, loading, disabled, onPress, onSubmit}) {
    return (
        <TouchableOpacity style={styles.wrapper} onPress={onPress} disabled={disabled}>
            <View style={styles.loadingSection}>
                {loading && <ActivityIndicator style={styles.loader} color="grey" />}
                <Text style={styles.buttonInput}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        height: 42,
        borderWidth: 1,
        borderRadius: 4,
        alignItems: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'blue',
        justifyContent: 'space-evenly'
    },
    loadingScreen: {
        flexDirection: 'row'
    },
    loader: {
        paddingRight: 5
    }
})
