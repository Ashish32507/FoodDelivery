import React, { useState } from "react";
import "./LoginPoup.css";
import { assets } from "../../assets/assets";
function LoginPoup({ setShowLogin }) {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="login-poup">
      <form action="" className="login-poup-container">
        <div className="login-poup-title">
          <h2>{currState}</h2>
          <img
            src={assets.cross_icon}
            alt=""
            onClick={() => {
              setShowLogin(false);
            }}
          />
        </div>
        <div className="login-poup-input">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Enter Your Name" required />
          )}
          <input type="email" placeholder="Enter Your Email" required />
          <input type="password" placeholder="password" />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Continuing, I agree to the term of use & privacy Policy</p>
        </div>
        {currState === "Login" ? (
          <p
            onClick={() => {
              setCurrState("Sign Up");
            }}
          >
            Create a new Account ? <span>Click Here</span>
          </p>
        ) : (
          <p
            onClick={() => {
              setCurrState("Login");
            }}
          >
            AllReady Have an Account ? <span>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPoup;
