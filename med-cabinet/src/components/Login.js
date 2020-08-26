import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logIn } from '../actions/actions'
import styled from 'styled-components'

const LogInPage = styled.div`
    width: 800px;
    margin: 0 auto;
    padding: 40px 0;
    border-radius: 10px;
    background: #6ed36e;
    display: flex;
    flex-direction: column;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;  
        input {
            width: 70%;
            margin: 0 15%;
        }      
        button {
           width: 150px; 
           margin: 20px 0 0 0;
        }
        a button {
            margin-bottom: 20px;
        }
    }
`;

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
        <LogInPage>
            <form onSubmit={handleSubmit} >
                <legend>Enter Username (email) and Password</legend>
                <label htmlFor='email' />email :
                    <input 
                        type='text'
                        name='email'
                        id='email'
                        placeholder='Enter Email(Username)'
                        value={formState.email}
                        onChange={handleChange}
                    />
                <label htmlFor='password' />Password :
                    <input 
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Enter Password'
                        value={formState.password}
                        onChange={handleChange}
                    />
                <button type='submit'>Log In</button>
                <Link to='/sign-up'><button>sign up</button></Link>
                {props.isLoggingIn ? <p style={{color: 'red'}}>Signing In...</p> : null}
                {props.loggingError ? <p style={{color: 'red'}}>There was an error...{props.loggingError}</p> : null}
            </form>
        </LogInPage>
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