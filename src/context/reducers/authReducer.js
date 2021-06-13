const authReducer = (state, { type, payload }) => {
    switch (type) {
        case 'Register Loading':
        case 'Login Loading':
            console.log('auth loading state', state)
            return { ...state, loading: true }
        case 'Register Success':
            return { ...state, loading: false, data: payload }
        case 'Login Success':
            return { ...state, loading: false, isLoggedIn: true }
        case 'Register Fail':
            return { ...state, loading: false, error: payload }
        case 'Login Fail':
            return { ...state, loading: false, error: payload }
        case 'Clear Auth State':
            return { ...state, loading: false, error: null, data: null }
        default:
            return state
    }
}

export default authReducer