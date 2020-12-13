import React,{ useContext } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import Dashboard from './Dashboard';
import LoginScreen from "./views/LoginScreen";

import routes from "./routes";
import withTracker from "./withTracker";
import { UserContext } from "./providers/UserProvider";


function Application() {
    const user = useContext(UserContext);
    console.log(user);
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
