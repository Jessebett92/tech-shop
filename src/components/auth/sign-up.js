import React from "react";

const SignUp = props => {
  return (
    <div className="sign-up-component">
      <div className="welcome-statement">
        <h1>Sign Up here! Its Easy</h1>
      </div>
      <div className="sign-up-page">
        <div className="sign-up-left">Quote</div>
        <div className="sign-up-right">
          <form className="sign-up-form">
            <input type="text" placeholder="Enter a valid email address" />
            <input type="password" placeholder="Create Your Password" />
            <input type="password" placeholder="Re-enter Your Password" />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
