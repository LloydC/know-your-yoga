import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm'
import logo from '../assets/yoga.png'

class Home extends Component {
    render(){
        return (
            <div className="App">
          <div className="App__Aside">
            <header className="App-header">
                    <h1>Know Your Yoga</h1>
                    <img src={logo} className="App-logo" alt="logo" />
                    <span>Curious about Yoga types? Join us and find your answers </span>
                </header>
          </div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div>

        </div>
        )
    }
}

export default Home;