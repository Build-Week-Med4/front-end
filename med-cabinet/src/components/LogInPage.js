import React from 'react'
import { connect } from 'react-redux'
import { makeUser } from '../actions/actions'

const LogInPage = (props) => {
    
    return(
        <>
            <button onClick={props.makeUser}>sign up</button>
            <h1>Login / Signup Page {props.isPosting ? <span>signing up...</span> : null}</h1>
            {props.error ? <p>{props.error}</p> : <p>testing redux error</p>}
        </>
    )
}

const mapStateToProps = state => {
    return {
        isPosting: state.isPosting,
        error: state.error
    }
}

export default connect(mapStateToProps, {makeUser}
)(LogInPage)