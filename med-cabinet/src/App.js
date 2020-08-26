import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import LogInPage from './components/LogInPage'
import SignUp from './components/SignUp'

import Form from './components/Form'
import PrivateRoute from './utils/PrivateRoute'
import NavHeader from './components/NavHeader'
import './App.css';
import APITest from './components/APITest';

function App() {
  return (
    <Router>
      <NavHeader />
      <div className="chilled">
        <p>App Initialized</p>
        <Link to='/user-form'><button>Form test</button></Link>
        <Switch>
          <PrivateRoute exact path='/user-form' component={Form} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/api-test' component={APITest} />
          <Route exact path='/' component={LogInPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
