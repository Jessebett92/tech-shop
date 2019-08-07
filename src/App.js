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

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnSuccessfulLogin = this.handleUnSuccessfulLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleSuccessfulLogin = () => {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  };

  handleUnSuccessfulLogin = () => {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  };

  handleLogout = () => {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  };

  render() {
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

              <Route
                path="/login-sign-up"
                component={LoginPage}
                loggedInStatus={this.state.loggedInStatus}
                handleSuccessfulLogin={this.handleSuccessfulLogin}
                handleUnSuccessfulLogin={this.handleUnSuccessfulLogin}
                handleLogout={this.handleLogout}
              />

              <Route
                path="/sign-up"
                component={SignUp}
                loggedInStatus={this.state.loggedInStatus}
                handleSuccessfulLogin={this.handleSuccessfulLogin}
                handleUnSuccessfulLogin={this.handleUnSuccessfulLogin}
                handleLogout={this.handleLogout}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
