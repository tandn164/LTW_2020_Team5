import React, { useState } from 'react';
import './LoginScreen.css';

import { auth , generateUserDocument, updatePassword} from '../components/Firebase/firebase';
import RegisterSVG from '../assets/register.svg'
import LogSVG from '../assets/log.svg'

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const [containerClassName, setClassName] = useState('contaiiner')
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
    console.log(auth.currentUser);
  };
  const handleSignIn = () => {
    setClassName('contaiiner')
  }
  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password).then((user) => {
        auth.currentUser.sendEmailVerification();
        if (user.user) {
          user.user.updateProfile({
            photoURL: user.photoURL ? user.photoURL:"https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
            displayName:displayName
          }).then(function() {
            updatePassword(password)
            generateUserDocument(user, displayName);
          }).catch(function(error) {
          });
        }
      })
    }
    catch(error){
      setError('Error Signing up with email and password');
    }
    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const handleSignUp = () => {
    setClassName(' contaiiner  sign-up-mode')
  }
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    }
    else if (name === 'userPassword') {
      setPassword(value);
    }
    else if (name === "displayName") {
      setDisplayName(value);
    }
    console.log(value);
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
                <input type="text" placeholder="Email" id="username"  name="userEmail" value = {email} onChange = {(event) => onChangeHandler(event)}/>
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" id="password" name="userPassword" value = {password} onChange = {(event) => onChangeHandler(event)}/>
              </div>
              <div className="forgot-password">
                <a href="#">Forgot password?</a>
              </div>
              <input type="submit" defaultValue="Login" className="btn solid" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}/>
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
                <input type="text" placeholder="Username" id="lastname" name="displayName" value={displayName} onChange={event => onChangeHandler(event)}/>
              </div>
              <div className="input-field">
                <i className="fas fa-envelope" />
                <input type="email" placeholder="Email" id="username" name="userEmail" value={email} onChange={event => onChangeHandler(event)} />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" id="password" name="userPassword" value={password} onChange={event => onChangeHandler(event)}/>
              </div>
              <input type="submit" className="btn" defaultValue="Sign up" 
              onClick={event => {
                     createUserWithEmailAndPasswordHandler(event, email, password);
                   }}/>
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