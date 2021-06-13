import React, { useContext, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Container from '../components/common/Container'
import CustomButton from '../components/common/CustomButton'
import Input from '../components/common/Input'
import loginAction from '../context/actions/auth/loginAction'
import GlobalContext from '../context/GlobalContext'

export default function Login() {
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({})
    const { authDispatch, auth: { error, loading, data } } = useContext(GlobalContext)

    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value })

        if (value) {
            if (name === 'password') {
                if (value.length < 3) {
                    setErrors((prev) => { return { ...prev, [name]: 'Password must be atleast 3 characters' } })
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

        if (!form.password) {
            setErrors((prev) => { return { ...prev, password: 'Please add a password' } })
        }

        if (Object.values(form).length === 2) {
            loginAction(form)(authDispatch)
        }
    }


    return (
        <Container>
            {error && <Text>Error: {error.error}</Text>}
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
                label="Password"
                iconPosition="right"
                style={styles.input}
                onChangeText={
                    (value) => { onChange({ name: 'password', value }) }
                }
                error={errors.password || error?.password?.[0]}
            />

            <CustomButton title="Submit" loading={false} disable={true} onPress={onSubmit} />

            <TouchableOpacity style={styles.registerButton} onPress={() => { navigate('Register') }}>
                <Text style={styles.registerText}>Register Here</Text>
            </TouchableOpacity>
        </Container>
    )
}

const styles = StyleSheet.create({
    input: {},
    registerButton: {
        padding: 10
    },
    registerText: {
        fontSize: 20
    }
})
