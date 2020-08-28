import axios from 'axios'

export const POSTING_USER_CREDS = 'POSTING_USER_CREDS'
export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS'
export const USER_CREATE_ERROR = 'USER_CREATE_ERROR'

export const LOGGING_IN_STATUS = 'LOGGING_IN_STATUS'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const LOGOUT_ACTION = 'LOGOUT_ACTION'

export const makeUser = (creds) => dispatch => {
    console.log('in the makeUser function', creds)
    dispatch({ type: POSTING_USER_CREDS });

    axios.post('https://lambda-med4-api.herokuapp.com/users/register', creds)
    .then(res => {
        console.log(res.data)
        // window.localStorage.setItem('token', res.data.token)
        dispatch({ type: USER_CREATE_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log('Error', err.message)
        dispatch({ type: USER_CREATE_ERROR, payload: err.message })
    })
}

export const logIn = (creds) => dispatch => {

    dispatch({ type: LOGGING_IN_STATUS })

    axios.post("https://lambda-med4-api.herokuapp.com/users/login", creds)
    .then(res => {
        console.log('action.js: logIn: success: ', res.data)
        window.localStorage.setItem('token', res.data.token)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err.message)
        dispatch({ type: LOGIN_ERROR, payload: err.message })
    })
}

export const logOut = () => {
    window.localStorage.clear();
    return {
        type: LOGOUT_ACTION
    }
}