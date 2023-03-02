import React, { Component } from 'react';
import Header from '../components/HeaderComponent/Header'
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/SignInForm';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          form: 'signup',
        }
      }
  render() {
    return (
        <div className="App">
            <Header />
            <div className="App__Form">
                <div className="PageSwitcher">
                    <span
                    className="PageSwitcher__Item"
                    onClick={()=> this.setState({form: 'login'})}
                    >
                    Log In
                    </span>
                    <span
                    className="PageSwitcher__Item"
                    onClick={()=> this.setState({form: 'signup'})}
                    >
                    Sign Up
                    </span>
                </div>
                <div className="FormTitle">
                    <span
                    className="FormTitle__Link"
                    onClick={()=> this.setState({form: 'login'})}
                    >
                    Log In
                    </span>
                    or
                    <span
                    className="FormTitle__Link "
                    onClick={()=> this.setState({form: 'signup'})}
                    >
                    Sign Up
                    </span>
                </div>
                {this.state.form === 'signup' && <SignUpForm />}
                {this.state.form === 'login' && <LoginForm />}
            </div>
        </div>
    );
  }
}

export default Home;
