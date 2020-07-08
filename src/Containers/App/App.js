import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../../Components/Login/Login'

export default function App(props) {
  return (
    <div className="container" id="AppComponent">
      <Router>
        <Route path="/" exact component={Login} />
        {/* <Route path="/register/" component={Register} />
        <Route path="/dashboard/" component={Dashboard} /> */}
      </Router>
    </div>
    );
} 