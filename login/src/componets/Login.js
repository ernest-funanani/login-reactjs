import React from "react";
import logo from "./logo/logo.png";
import "./Login.css";

function Login() {
  return (
    <div class="login">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <h3 class="login-account">Login to your account</h3>
      <div class="form">
        <h6>Email</h6>
        <input class="text" type="text" placeholder="Enter Email address" />
        <h6>Password</h6>
        <input class="password" type="password" placeholder="Enter Password" />
        <button class="login-btn">Login</button>
        <div class="tick-box">
          <input type="checkbox" />
          <p>Remember me for 30 days</p>
        </div>
      </div>
      <p class="account-text">Don't have account?</p>
      <span class="create-account">Create an account</span>
    </div>
  );
}

export default Login;
