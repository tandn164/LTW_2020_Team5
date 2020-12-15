import React,{ useContext } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import Dashboard from './Dashboard';
import LoginScreen from "./views/LoginScreen";

import { UserContext } from "./providers/UserProvider";

function Application() {
    const user = useContext(UserContext);
    return (
          !user ?
          <LoginScreen />
        :
          <Router>
            <Dashboard/>
          </Router>
    );
}
export default Application;
