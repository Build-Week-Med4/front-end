import React, { useState } from 'react';
import { connect } from 'react-redux'
import { logIn } from '../actions/actions'

const initialValue = {
    email: '',
    password: ''
}

const Login = (props) => {
    const [formState, setFormState] = useState(initialValue)

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.logIn({
            email: 'eve.holt@reqres.in',
            password: 'pistol'
        })
        setFormState(initialValue)
    }
    
    return(
        <>
            <form onSubmit={handleSubmit} >
                <legend>Enter Username (email) and Password</legend>
                <label htmlFor='email' />email :
                    <input 
                        type='text'
                        name='email'
                        id='email'
                        value={formState.email}
                        onChange={handleChange}
                    />
                <label htmlFor='password' />Password :
                    <input 
                        type='password'
                        name='password'
                        id='password'
                        value={formState.password}
                        onChange={handleChange}
                    />
                <button type='submit'>Log In</button>
                {props.isLoggingIn ? <p style={{color: 'red'}}>Signing In...</p> : null}
                {props.loggingError ? <p style={{color: 'red'}}>There was an error...{props.loggingError}</p> : null}
            </form>
        </>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
        isLoggingIn: state.isLoggingIn,
        loggingError: state.loggingError
    }
}

export default connect(mapStateToProps, { logIn })(Login)