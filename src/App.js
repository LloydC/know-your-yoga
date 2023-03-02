import React, {
  Component
} from 'react';
import {
  Routes, Route
} from 'react-router-dom';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import fire from './utils/firebase';
import './assets/styles/style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.authListener(),
      userCheck: false
    }
    this.authListener = this.authListener.bind(this)
  }

  componentDidMount() {}

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user,
          userCheck: true
        });
      } else {
        this.setState({
          user: null,
          userCheck: true
        })
      }
    })
  }

  render() {
    if (!this.state.userCheck) {
      return null;
    }
    return ( 
              <Routes>
                <Route path="/" element={this.state.user ? <Profile / > : <Home user={this.state.user} / >} />
                <Route path="/sign-up" element={<SignUpForm />}></Route>
                <Route path="/sign-in" element={<SignInForm />}></Route>
              </Routes>
    );
  }
}

export default App;