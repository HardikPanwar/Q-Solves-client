import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import "./Auth.css";
import logo from "../../assets/logo.svg";
import AboutAuth from "./AboutAuth";
import { login, signup } from "../../actions/auth";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleSubmit= (e)=> {
    e.preventDefault();

    if(!email || !password) alert("Please enter email and password")

    if(isSignup) {
      if(!name) alert('Enter a name to continue');

      dispatch(signup({name,email,password},navigate));
    }else dispatch(login({email,password},navigate))
  }

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };
  return (
    <section className="auth-section">
      {isSignup && <AboutAuth />}
      <div className="auth-container-2">
        {!isSignup && (
          <img src={logo} width="35" alt="Developer" className="login-logo" />
        )}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input type="text" name="name" id="name" onChange={(e)=> setName(e.target.value)} />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id="email" onChange={(e)=> setEmail(e.target.value)}/>
          </label>
          <label htmlFor="password">
            <div style={{display: "flex", justifyContent:"space-between"}}>
              <h4>Password</h4>
              {!isSignup && <p style={{color: "#007ac6",fontSize:"13px"}}>Forgot Password?</p>}
            </div>
            <input type="password" name="password" id="password" onChange={(e)=> setPassword(e.target.value)}/>
            {isSignup && (
              <p style={{color: "#0666767",fontSize:"13px"}}>
                Password must contain atleast 8 characters,
                <br /> including atleast 1 letter
                <br /> and 1 number
              </p>
            )}
          </label>
          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" name="check" id="check" />
              <p>
                Opt-in to receive occasional,
                <br />
                product updates, user research, invitations,
                <br /> company announcement, and digests.
              </p>
            </label>
          )}
          <button type="submit" className="auth-btn">
            {isSignup ? "Signup" : "Login"}
          </button>
          {isSignup && (
            <p style={{color: "#0666767",fontSize:"13px"}}>
              By clicking "Sign up", you agree to our 
              <span style={{color: "#007ac6"}}> terms of<br />services</span>,
              <span style={{color: "#007ac6"}}> privacy policy</span> and 
              <span style={{color: "#007ac6"}}> cookie policy</span>
            </p>
          )}
        </form>
        <>
          {isSignup ? "already have an account" : "Don't have an account"}
          <button
            type="submit"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignup ? "Login" : "Signup"}
          </button>
        </>
      </div>
    </section>
  );
};

export default Auth;
