import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from "./Login/Login";

function App() {
  return (
    <div className="App">

        <Router>
            <Route path="/login" component={Login} />
        </Router>

    </div>
  );
}

export default App;
