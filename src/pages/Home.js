import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Header from '../components/HeaderComponent/Header'
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

class Home extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <div className="App__Form">
                <div className="PageSwitcher">
                    <NavLink
                    to="/sign-in"
                    activeClassName="PageSwitcher__Item--Active"
                    className="PageSwitcher__Item"
                    >
                    Log In
                    </NavLink>
                    <NavLink
                    exact
                    to="/"
                    activeClassName="PageSwitcher__Item--Active"
                    className="PageSwitcher__Item"
                    >
                    Sign Up
                    </NavLink>
                </div>
                <div className="FormTitle">
                    <NavLink
                    to="/sign-in"
                    activeClassName="FormTitle__Link--Active"
                    className="FormTitle__Link"
                    >
                    Log In
                    </NavLink>
                    or
                    <NavLink
                    exact
                    to="/"
                    activeClassName="FormTitle__Link--Active "
                    className="FormTitle__Link "
                    >
                    Sign Up
                    </NavLink>
                </div>
                <Route exact path="/" component={SignUpForm}></Route>
                <Route path="/sign-in" component={SignInForm}></Route>
            </div>
        </div>
    );
  }
}

export default Home;
