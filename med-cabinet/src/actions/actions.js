import axios from 'axios'

export const POSTING_USER_CREDS = 'POSTING_USER_CREDS'
export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS'
export const USER_CREATE_ERROR = 'USER_CREATE_ERROR'

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