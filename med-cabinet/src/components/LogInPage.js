import React from 'react'
import { Link } from 'react-router-dom'

import Login from './Login'

const LogInPage = () => {
    
    return(
        <>
            <Login />
            <Link to='/sign-up'><button>sign up</button></Link>
        </>
    )
}

export default LogInPage