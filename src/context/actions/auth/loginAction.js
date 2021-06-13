import AsyncStorage from "@react-native-async-storage/async-storage"
import axiosInstance from "../../../helpers/axiosInstance"

export default ({ userName: username, password }) => (dispatch) => {

    dispatch({ type: 'Login Loading' })

    axiosInstance.post('auth/login', {
        password, username
    })
        .then(res => { 
            console.log('Login response:',res.data)
            AsyncStorage.setItem("token", res.data.token)
            AsyncStorage.setItem("user", JSON.stringify(res.data.user))
            dispatch({ type: 'Login Success', payload: res.data }) }
            )
        .catch(error => {
            console.log('error in loginAction:', error)
            console.log('error in loginAction detail :', error.response)
            dispatch({
                type: 'Login Fail',
                payload: error.response ? error.response.data : { error: 'Some error happened' }
            })
        })
}