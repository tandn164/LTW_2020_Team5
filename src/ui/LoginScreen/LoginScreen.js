import React, { useState } from 'react';
import './LoginScreen.css';

import { Link } from "@reach/router";
import { auth } from '../../components/Firebase/firebase';
// import { ReactComponent as RegisterSVG } from '../../assests/register.svg';
// import { ReactComponent as LogSVG } from '../../assests/log.svg';
import RegisterSVG from '../../assests/register.svg'
import LogSVG from '../../assests/log.svg'

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [containerClassName, setClassName] = useState('container')
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    console.log(email);
    console.log(password);

    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
    console.log(auth.currentUser);
  };
  const handleSignIn = () => {
    setClassName('container')
    console.log("sign-in ", containerClassName);
  }

  const handleSignUp = () => {
    setClassName(' container  sign-up-mode')
    console.log("sign-up  ", containerClassName);
  }
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    }
    else if (name === 'userPassword') {
      setPassword(value);
    }
  };
  return (
    <div>
      <title>Sign in &amp; Sign up Form</title>
      <div className={containerClassName}>
        <div className="forms-container">
          <div className="signin-signup">
            <form   className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-envelope" />
                <input type="text" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" />
              </div>
              <div className="forgot-password">
                <a href="#">Forgot password?</a>
              </div>
              <input type="submit" defaultValue="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter" />
                </a>
              </div>
            </form>
            <form
              className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" defaultValue="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter" />
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                “Live as if you were to die tomorrow. Learn as if you were to live forever.”
                </p>
              <button onClick={() => {
                handleSignUp()
              }} className="btn transparent" id="sign-up-btn">
                Sign up
                </button>
            </div>
            <img src={LogSVG} alt="React Logo" className="image"/>
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                “The more that you read, the more things you will know.
                The more that you learn, the more places you'll go.”
                </p>
              <button onClick={() => {
                handleSignIn()
              }}
                className="btn transparent" id="sign-in-btn">
                Sign in
                </button>
            </div>
            <img src={RegisterSVG} alt="React Logo"  className="image"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;