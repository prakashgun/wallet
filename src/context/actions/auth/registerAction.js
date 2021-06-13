import axiosInstance from "../../../helpers/axiosInstance"


export const clearAuthState = () => (dispatch) => {
    dispatch({type: 'Clear Auth State'})
}

export default ({ userName: username, password, firstName: first_name, lastName: last_name, email }) => (dispatch) => {

    dispatch({ type: 'Register Loading' })

    axiosInstance.post('auth/register', {
        email, password, username, first_name, last_name
    })
        .then(res => { dispatch({ type: 'Register Success', payload: res.data }) })
        .catch(error => {
            console.log('error in registerAction:', error)
            console.log('error in registerAction detail :', error.response)
            dispatch({
                type: 'Register Fail',
                payload: error.response ? error.response.data : { error: 'Some error happened' }
            })
        })
}