import { POSTING_USER_CREDS, USER_CREATE_SUCCESS, USER_CREATE_ERROR } from '../actions/actions'

const initialState = {
    isPosting: false,
    credentials: {
        username: '',
        password: ''
    },
    error: ''
}

export const reducer = (state = initialState, action) => {

    switch(action.type){
        case POSTING_USER_CREDS :
            return {
                ...state,
                isPosting: true
            }
        case USER_CREATE_SUCCESS :
            return {
                    ...state,
                    credentials: {
                        username: 'user1',
                        password: 'Abc123!'
                    },
                    error: '',
                    isPosting: false
                }
        case USER_CREATE_ERROR :
            return {
                ...state,
                // isPosting: true,
                error: action.payload
            }
        default :
            return state
    }
}