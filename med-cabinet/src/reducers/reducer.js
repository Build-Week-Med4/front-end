import { POSTING_USER_CREDS, USER_CREATE_SUCCESS, USER_CREATE_ERROR, LOGGING_IN_STATUS, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_ACTION } from '../actions/actions'

const initialState = {
    isPosting: false,
    isLoggingIn: false,
    token: '',
    successMessage: '',
    error: '',
    loggingSuccess: '',
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
                    error: '',
                    loggingSuccess: '',
                    loggingError: '',
                    successMessage: action.payload.message,
                    isPosting: false
                }
        case USER_CREATE_ERROR :
            return {
                ...state,
                successMessage: '',
                loggingSuccess: '',
                loggingError: '',
                isPosting: false,
                error: action.payload
            }
        case LOGGING_IN_STATUS :
            return {
                ...state,
                isLoggingIn: true,
                token: action.payload
            }
        case LOGIN_SUCCESS :
            return {
                ...state,
                isLoggingIn: false,
                successMessage: '',
                error: '',
                loggingSuccess: action.payload.message + ', Click Find Recommendations at the top of the page to Get Started !',
                token: action.payload.token,
                loggingError: ''
            }
        case LOGIN_ERROR :
            return {
                ...state,
                isLoggingIn: false,
                successMessage: '',
                error: '',
                loggingSuccess: '',
                loggingError: action.payload
            }
        case LOGOUT_ACTION :
            return {
                isPosting: false,
                isLoggingIn: false,
                token: '',
                successMessage: '',
                error: '',
                loggingSuccess: '',
                loggingError: ''
            }
        default :
            return state
    }
}