import React, {useState} from 'react'
import { connect } from 'react-redux'
import { makeUser } from '../actions/actions'

const LogInPage = (props) => {
    const [credentials, setCredentials ] = useState({
        id: '',
        password: '',
        email: ''
    })

    const { password, email } = credentials

    const onChange = e => {
      setCredentials({
            ...credentials,
        [e.target.name]: e.target.value
      })
    }

    const onSubmit = e => {}
    
    return(
        
        <div className="form-container">
          <h1>Login / Signup Page {props.isPosting ? <span>signing up...</span> : null}</h1>
             {/* {props.error ? <p>{props.error}</p> : <p>testing redux error</p>} */}
        <form>
        <input
        name="email"
        type="email"
        placeholder="email"
        value={email}
        onChange={onChange}
        />
        <input
        name="password"
        type="password"
        placeholder="password"
        value={password}
        onChange={onChange}
        />
         <button onClick={props.makeUser}>Login</button>
        </form>

           
             </div>
           
           
        
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