import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../LoginScreen/LoginScreen.css';
import { Link } from "@reach/router";
import {auth, generateUserDocument} from "../../components/Firebase/firebase";

const SignUpScreen = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password).then((user) => {
        auth.currentUser.sendEmailVerification();
      })
      generateUserDocument(user, {displayName});
    }
    catch(error){
      setError('Error Signing up with email and password');
    }
    setEmail("");
    setPassword("");
    setDisplayName("");
  };
  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };
    return (
        <div>
          {/* Required meta tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* Bootstrap CSS */}
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous" />
          <link rel="stylesheet" href="style.css" />
          <title>Login form</title>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12 row-container">
                <form>
                  <h1>Create account</h1>
                  <p>Already have an account?
                    <Link to="/sign-in">Sign in</Link>
                  </p>
                  <div className="form-group mt-5">
                    <input type="email" className="form-control" id="username" name="userEmail" value={email} placeholder="Username" onChange={event => onChangeHandler(event)}/>
                  </div>
                  <div className="row my-3">
                    <div className="col-sm pr-1">
                      <input type="text" className="form-control" style={{borderBottomRightRadius: '5px', borderTopRightRadius: '5px'}} id="firstname" placeholder="First name" onChange={event => onChangeHandler(event)}/>
                    </div>
                    <div className="col-sm pl-0">
                      <input type="text" className="form-control" style={{borderBottomLeftRadius: '5px', borderTopLeftRadius: '5px'}} id="lastname" name="displayName" value={displayName} placeholder="Last name" onChange={event => onChangeHandler(event)}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" id="password" name="userPassword" value={password} placeholder="Password" onChange={event => onChangeHandler(event)}/>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" id="password" placeholder="Confirm password" onChange={event => onChangeHandler(event)}/>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg btn-block my-3"
                  onClick={event => {
                    createUserWithEmailAndPasswordHandler(event, email, password);
                  }}>
                    Sign up
                    <span>
                      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-double-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                        <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </span>
                  </button>
                </form></div>
            </div>
          </div>
        </div>
      );
}

export default SignUpScreen;