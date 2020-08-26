import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { makeUser } from '../actions/actions'

const SignUp = (props) => {
    const { push } = useHistory()
    const [formData, setFormData] = useState({
        username: '', 
        password: ''
    })

    const handleChange = e => {
        console.log(formData.username)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = e => {
        e.preventDefault();

        if(formData.username && formData.password){            
            props.makeUser(formData)
            return push('/')
        }

        return setFormData({
            username: '',
            password: ''
        })
    }
    
    return(
        <form onSubmit={handleSubmit} >
            <legend>Input New Username and Create a Password</legend>
            <label htmlFor='username' />Enter Username: 
            <input
                type='text'
                name='username'
                id='username'
                value={formData.username}
                onChange={handleChange}
            />
            <label htmlFor='password' />Enter Password: 
            <input
                type='password'
                name='password'
                id='password'
                value={formData.password}
                onChange={handleChange}
            />
            <button type='submit'>Submit</button>
            {props.isPosting ? <p style={{color: 'red'}} >Signing Up...</p> : null}
            {props.error ? <p style={{color: 'red'}} >unsuccessful post</p> : null}
        </form>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
        isPosting: state.isPosting,
        error: state.error
    }
}

export default connect(mapStateToProps, { makeUser })(SignUp)