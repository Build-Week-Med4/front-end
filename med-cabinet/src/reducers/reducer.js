import { POSTING_USER_CREDS, USER_CREATE_SUCCESS, USER_CREATE_ERROR, LOGGING_IN_STATUS, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/actions'

const initialState = {
    isPosting: false,
    isLoggingIn: false,
    credentials: {
        username: '',
        password: ''
    },
    token: '',
    error: '',
    loggingError: ''
}

export const reducer = (state = initialState, action) => {

    switch(action.type){
        case POSTING_USER_CREDS :
            return {
                ...state,
                isPosting: true
            }
        case USER_CREATE_SUCCESS :
            console.log(action.payload)
            return {
                    ...state,
                    credentials: {
                        username: action.payload.username,
                        password: action.payload.password
                    },
                    error: '',
                    isPosting: false
                }
        case USER_CREATE_ERROR :
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }
        case LOGGING_IN_STATUS :
            return {
                ...state,
                isLoggingIn: true,
            }
        case LOGIN_SUCCESS :
            return {
                ...state,
                isLoggingIn: false,
                token: action.payload,
                loggingError: ''
            }
        case LOGIN_ERROR :
            return {
                ...state,
                isLoggingIn: false,
                loggingError: action.payload
            }
        default :
            return state
    }
}