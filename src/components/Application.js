import React,{ useContext } from "react";
import { Router } from "@reach/router";
import LoginScreen from "../ui/LoginScreen/LoginScreen";
import SignUpScreen from "../ui/SignUpScreen/SignUpScreen";
import ProfileScreen from "../ui/ProfileScreen/ProfileScreen";
import { UserContext } from "../providers/UserProvider";

function Application() {
  const user = useContext(UserContext);
  console.log(user);
  return (
        user ?
        <ProfileScreen />
      :
        <Router>
          <SignUpScreen path="sign-up" />
          <LoginScreen path="sign-in"/>
          <LoginScreen path="/" />
        </Router>

  );
}
export default Application;
