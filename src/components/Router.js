import React, {Component} from 'react';
import {HashRouter as Router} from 'react-router-dom';
import Profile from './Profile';
import Home from './Home';
import fire from './firebase';
import '../style.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged(user => {
      if(user){
        this.setState({ user });
      }
      else {
        this.setState({ user: null})
      }
    })
  }

  render() {
    return (
      <Router>
        {(this.state.user === null) ? <Home/> : <Profile/>}
      </Router>
    );
  }
}

export default App;