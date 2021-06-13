import { useNavigation } from '@react-navigation/core'
import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Container from '../components/common/Container'
import CustomButton from '../components/common/CustomButton'
import Input from '../components/common/Input'
import registerAction, { clearAuthState } from '../context/actions/auth/registerAction'
import GlobalContext from '../context/GlobalContext'

export default function Register() {
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const { navigate } = useNavigation()
    const { authDispatch, auth: { error, loading, data } } = useContext(GlobalContext)

    useEffect(() => {
        if (data) {
            navigate('Login')
        }
    }, [data])

    useFocusEffect(
        useCallback(() => {
            if (data || error) {
                clearAuthState()(authDispatch)
            }
        }), [data, error])

    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value })



        if (value) {
            if (name === 'password') {
                if (value.length < 6) {
                    setErrors((prev) => { return { ...prev, [name]: 'Password must be atleast 6 characters' } })
                } else {
                    setErrors((prev) => { return { ...prev, [name]: null } })
                }
            } else {
                setErrors((prev) => { return { ...prev, [name]: null } })
            }
        } else {
            setErrors((prev) => { return { ...prev, [name]: 'This field is required' } })

        }
    }

    const onSubmit = () => {
        //validation
        console.log('form', form)

        if (!form.userName) {
            setErrors((prev) => { return { ...prev, userName: 'Please add a username' } })
        }

        if (!form.lastName) {
            setErrors((prev) => { return { ...prev, userName: 'Please add a username' } })
        }

        if (!form.firstName) {
            setErrors((prev) => { return { ...prev, firstName: 'Please add a firstName' } })
        }

        if (!form.email) {
            setErrors((prev) => { return { ...prev, email: 'Please add a email' } })
        }

        if (!form.password) {
            setErrors((prev) => { return { ...prev, password: 'Please add a password' } })
        }

        if (Object.values(form).length === 5) {
            registerAction(form)(authDispatch)
        }
    }

    return (
        <Container>
            {error && <Text>n {error.error}</Text>}
            <Input
                label="First Name"
                iconPosition="right"
                style={styles.input}
                onChangeText={
                    (value) => { onChange({ name: 'firstName', value }) }
                }
                error={errors.firstName || error?.first_name?.[0]}
            />
            <Input
                label="Last Name"
                iconPosition="right"
                style={styles.input}
                onChangeText={
                    (value) => { onChange({ name: 'lastName', value }) }
                }
                error={errors.firstName || error?.last_name?.[0]}
            />
            <Input
                label="Username"
                iconPosition="right"
                style={styles.input}
                onChangeText={
                    (value) => { onChange({ name: 'userName', value }) }
                }
                error={errors.userName || error?.username?.[0]}
            />
            <Input
                label="Email"
                iconPosition="right"
                style={styles.input}
                onChangeText={
                    (value) => { onChange({ name: 'email', value }) }
                }
                error={errors.email || error?.email?.[0]}
            />
            <Input
                label="Password"
                iconPosition="right"
                style={styles.input}
                onChangeText={
                    (value) => { onChange({ name: 'password', value }) }
                }
                error={errors.password || error?.password?.[0]}
            />

            <CustomButton title="Submit" loading={false} disable={true} onPress={onSubmit} />

            <TouchableOpacity style={styles.registerButton} onPress={() => navigate('Login')}>
                <Text>Login</Text>
            </TouchableOpacity>
        </Container>
    )
}

const styles = StyleSheet.create({
    registerButton: {}
})
