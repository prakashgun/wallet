import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

export default function Input({ label, icon, iconPosition, style, onChangeText, value, error }) {

    const [focused, setFocused] = useState(false)

    const getFlexDirection = () => {
        if (icon && iconPosition) {
            if (iconPosition == 'left') {
                return 'row'
            } else if (iconPosition == 'right') {
                return 'row-reverse'
            }
        }
    }

    const getBorderColor = () => {
        if (error) {
            return 'red'
        } else if (focused) {
            return 'blue'
        } else {
            return 'grey'
        }
    }

    return (
        <View style={styles.inputContainer}>
            {label && <Text>{label}</Text>}
            <View style={[
                styles.wrapper,
                { flexDirection: getFlexDirection(), borderColor: getBorderColor() },
                { alignItems: icon ? 'center' : 'baseline' }
            ]}>
            {icon && icon}
            <TextInput 
                style={[styles.textInput, style]}
                onChangeText={onChangeText}
                value={value}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                autoCapitalize="none"
            />
            </View>
           {error && <Text style={styles.error}>{error}</Text>} 
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        height: 42,
        borderWidth: 1,
        borderRadius: 4,
        textAlignVertical: 'center',
    },
    inputContainer:{
        paddingVertical: 5
    },
    textInput: {
        flex: 1,
        width: '100%'
    },
    error:{
        color: 'red',
        paddingTop: 4
    }
})
