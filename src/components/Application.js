import React, { useContext } from "react";
import { Router } from "@reach/router";
import LoginScreen from "../ui/LoginScreen/LoginScreen";
import SignUpScreen from "../ui/SignUpScreen/SignUpScreen";
import ProfileScreen from "../ui/ProfileScreen/ProfileScreen";
import { UserContext } from "../providers/UserProvider";
import { Helmet } from "react-helmet";

function Application() {
  const user = useContext(UserContext);
  console.log(user);
  return (
    user ?
      <ProfileScreen />
      :
      <Router>
        <SignUpScreen path="sign-up" />
        <LoginScreen path="sign-in">
          <Helmet>
          </Helmet>
        </LoginScreen>
        <LoginScreen path="/">
          {/* <script
              rc="https://kit.fontawesome.com/64d58efce2.js"
              crossorigin="anonymous"></script> */}
          <script src="/ui/LoginScreen/LoginScreenAction.js" type="text/javascript" />
        </LoginScreen>
      </Router>

  );
}
export default Application;
