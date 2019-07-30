import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./components/navigation/navigation-container";
import Home from "./components/pages/home";
import Products from "./components/pages/products";
import Contact from "./components/pages/contact";
import Factory from "./components/pages/factory";
import LoginPage from "./components/auth/login";

import SignUp from "./components/auth/sign-up";

import "./styles/main.scss";

const App = () => {
  return (
    <div className="content-wrapper">
      <Router>
        <NavigationContainer />

        <div className="component-display-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/factory" component={Factory} />

            <Route path="/contact" component={Contact} />
            <Route path="/login-sign-up" component={LoginPage} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
