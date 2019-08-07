import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login-component">
      <div className="login-title">
        <h1>Welcome Back</h1>
      </div>
      <div className="login-page">
        <div className="input-fields">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
        </div>
        <button className="btn" type="submit">
          Login
        </button>
        <p>Forgot Username / Password?</p>
        <Link className="sign-up-link" to="/sign-up">
          Don't have an Account? <span>Sign-Up!</span>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
