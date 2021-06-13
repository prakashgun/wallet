import axios from 'axios'
import { BACKEND_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'

token = AsyncStorage.getItem('token')

console.log('token', token)

export default axios.create({
    baseURL: BACKEND_URL,
    mode: 'cors',
    headers: {'Authorizarion': `Bearer ${token}`, 'Access-Control-Allow-Origin': true}
})
