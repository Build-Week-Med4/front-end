import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import LogInPage from './components/LogInPage'
import Form from './components/Form'
import PrivateRoute from './utils/PrivateRoute'
import './App.css';

function App() {
  return (
    <Router>
      <div className="chilled">
        <p>App Initialized</p>
        <Link to='/user-form'><button>Form test</button></Link>
        <PrivateRoute exact path='/user-form' component={Form} />
        <Route exact path='/' component={LogInPage} />
      </div>
    </Router>
  );
}

export default App;
