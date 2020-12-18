import React, { useContext, useState } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './fireConfig';
import fb from '../../Icon/fb.png';
import google from '../../Icon/google.png';
import { SelectedProductContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';





const Login = () => {

  if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig);

  }
  const [newUser, setNewUser] = useState(true);
  const [users, setUsers] = useState({
    firstName: '',
    laseName:'',
    email: '',
    password: '',
    error: '',
    confirmPassword: '',
    success: false,

  });

  const [loggedInUser, setLoggedInUser] = useContext(SelectedProductContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
      isFieldValid = isEmailValid;
      console.log(isEmailValid);
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 5;
      const isPasswordHasNumber = /\d/.test(e.target.value);
      isFieldValid = isPasswordValid && isPasswordHasNumber;
      console.log(isPasswordHasNumber, isPasswordValid);
    }

    if (isFieldValid) {
      const newUserInfo = { ...users };
      newUserInfo[e.target.name] = e.target.value;
      setUsers(newUserInfo);

    }

  };
  const handleSubmit = (e) => {
    if (newUser && users.email && users.password){
      firebase.auth().createUserWithEmailAndPassword(users.email, users.password)
        .then((user) => {
          const newUserInfo = { ...users };
          newUserInfo.error = '';
          newUserInfo.success = true;
          console.log(newUserInfo);
          setUsers(newUserInfo);
          verifyEmail();
          setLoggedInUser(newUserInfo);
          history.replace(from);
          console.log('created successfully');

        })
      
        .catch((error) => {
          const newUserInfo = { ...users };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUsers(newUserInfo);
          history.replace(from);
        });
      }
    if (!newUser && users.email && users.password) {
      firebase.auth().signInWithEmailAndPassword(users.email, users.password)
        .then((users) => {
          const newUserInfo = { ...users };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUsers(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);

        })
        .catch((error) => {
          const newUserInfo = { ...users };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUsers(newUserInfo);
          history.replace(from);

        });
    }

    e.preventDefault();
  };

  const handleGoogleSignUp=()=>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider)
    .then(function(result) {
      const {email}=result.user;   
      const signInUser={email:email}
      setLoggedInUser(signInUser);
      history.replace(from);

    })
    .catch(function(error) {
     console.log(error);
    });

  };

  const handleFacebookSignUp = ()=>{
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(facebookProvider)
    .then(function(result) {
      console.log(result);
      
      const {email}=result.user;   
      console.log(email);
      const signInUser={email:email}
          setLoggedInUser(signInUser);
          history.replace(from);

    }).catch(function(error) {
     console.log(error)
    });

  };

  const verifyEmail=()=>{
    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function() {
      // Email sent.
    }).catch(function(error) {
      // An error happened.
    });
  }
 const resetPassword=(email)=>{
  
  var auth = firebase.auth();
auth.sendPasswordResetEmail(email).then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});
 }

  return (
    <div className="login-page">

      <form onSubmit={handleSubmit}>
        <h1>{newUser ? 'Create an account ' : 'Log in'}</h1>
        {
          newUser ?
           <div> 
            <input name="First-Name" id="firstName" placeholder="First Name" required />
            <br />
            <input name="Last-Name" id="lastName" placeholder="Last Name" required />
            <br />
          </div>
             : ''
        }
        <input name="email" onBlur={handleBlur} id="user" placeholder="UserName or Email" required />

        <br />
        <input type='password' name="password" onBlur={handleBlur} id="password" placeholder="Password" required />

        <br />
        {
          newUser ? 
          <div>
            <input type='password' name="confirmPassword" onBlur={handleBlur} id="confirm" placeholder="Confirm Password" required />
            <br />
          </div>
            : <div className=" log-page">
              <div className=" log1">
                <input type="checkbox" className="checkbox" name="Remember me" id="" />
                <label htmlFor="Remember me" id="remember" >Remember me</label>
              </div>
              <div className=" log2">
                <span onClick={()=>resetPassword(users.email)}>Forget password?</span>
              </div>
            </div>
        }

        <input type="submit" id="submit" value={newUser ? "Create an account" : " Log in"} />
        <p> {newUser ? 'Already have an account?' : "Don't have an account?"} <span onClick={() => setNewUser(!newUser)}>{newUser ? 'Create an account' : 'Login'}</span> </p>
      </form>
      <p id="error">{users.error}</p>
      {
        users.success && <p id='success'>created successfully</p>
      }
      <strong id="before"></strong><span className="or">Or</span><strong id="after"></strong>
      <br /> 
     <button id="facebook" onClick={handleFacebookSignUp}> <img id='fb-img' src={fb} alt="" /> Continue with Facebook</button>
      <br />
      <button id="google" onClick={handleGoogleSignUp}> <img id='google-img' src={google} alt="" /> Continue with Google</button>

    </div>
  );
};

export default Login;