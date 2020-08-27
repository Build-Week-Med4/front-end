import axios from 'axios'
import { useHistory } from 'react-router-dom'

export const POSTING_USER_CREDS = 'POSTING_USER_CREDS'
export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS'
export const USER_CREATE_ERROR = 'USER_CREATE_ERROR'

export const LOGGING_IN_STATUS = 'LOGGING_IN_STATUS'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const makeUser = (creds) => dispatch => {
    console.log('in the makeUser function')
    dispatch({ type: POSTING_USER_CREDS });

    axios.post('https://reqres.in/api/users', creds)
    .then(res => {
        console.log(res.data)
        dispatch({ type: USER_CREATE_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err.message)
        dispatch({ type: USER_CREATE_ERROR, payload: err.message })
    })
}

export const logIn = (creds) => dispatch => {

    dispatch({ type: LOGGING_IN_STATUS })

    axios.post('https://reqres.in/api/login', creds)
    .then(res => {
        console.log('action.js: logIn: success: ', res.data.token)
        window.localStorage.setItem('token', res.data.token)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
    })
    .catch(err => {
        console.log(err.message)
        dispatch({ type: LOGIN_ERROR, payload: err.message })
    })
}