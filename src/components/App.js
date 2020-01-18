import React, {Component} from 'react';
import {HashRouter as Router} from 'react-router-dom';
import Profile from '../pages/Profile';
import Home from '../pages/Home';
import fire from '../utils/firebase';
import '../style.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: this.authListener(),
      userCheck: false
    }
    this.authListener = this.authListener.bind(this)
  }

  componentDidMount(){
    // this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged(user => {
      if(user){
        this.setState({ user, userCheck:true });
      }
      else {
        this.setState({ user: null, userCheck: true})
      }
    })
  }

  render() {
    if(!this.state.userCheck){
      return null;
    }
    return (
      <Router exact path="/">
        {this.state.user ? <Profile/> : <Home/>}
      </Router>
    );
  }
}

export default App;