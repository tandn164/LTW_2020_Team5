import React, { useContext } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

import UserProvider from "./providers/UserProvider";
import Application from "./Application";

function App() {
  return (
    <UserProvider>
      <Application/>
    </UserProvider>
  )
}
export default App;
