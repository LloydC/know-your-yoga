import React, {
  Component
} from 'react';
import {
  HashRouter as Router
} from 'react-router-dom';
import Profile from './components/ProfileComponent/Profile';
import Home from './pages/Home';
import fire from './firebase';
import './assets/styles/style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user
        });
      } else {
        this.setState({
          user: null
        })
      }
    })
  }

  render() {
    return ( <
      Router > {
        (this.state.user !== null) ? < Profile / > : < Home / >
      } <
      /Router>
    );
  }
}

export default App;