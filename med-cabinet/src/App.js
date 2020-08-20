import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LogInPage from './components/LogInPage'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <p>App Initialized</p>
        <Route exact path='/' component={LogInPage} />
      </div>
    </Router>
  );
}

export default App;
