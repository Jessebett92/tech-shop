import React from "react";
import { NavLink } from "react-router-dom";

const NavigationContainer = () => {
  return (
    <div className="links-background">
      <div className="links-wrapper">
        <div className="nav-left-side">
          <NavLink exact to="/">
            Home
          </NavLink>

          <NavLink to="/products">Products</NavLink>

          <NavLink to="/factory">Make Your Own Combination</NavLink>
        </div>
        <div className="nav-right-side">
          <NavLink to="/contact">Contact</NavLink>
          <div className="auth-routes">
            <NavLink to="/login-sign-up">Login</NavLink>
            <NavLink to="/sign-up">Sign Up</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationContainer;
