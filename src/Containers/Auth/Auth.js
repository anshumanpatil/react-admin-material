import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../../Components/Login/Login';
import Register from '../../Components/Register/Register';
import Dashboard from '../Dashboard/Dashboard';

export default function Auth(props) {

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn'));

  return (
    <div className="container" id="AuthComponent">
      <Router>
        <Route path="/" exact component={loggedIn ? Dashboard : Login} />
        <Route path="/register/" component={Register} />
        <Route path="/dashboard/" component={Dashboard} />
      </Router>
    </div>
  );
} 