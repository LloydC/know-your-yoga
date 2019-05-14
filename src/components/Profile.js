import React, { Component } from 'react';
import fire from './firebase';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {},
        }
        this.logout = this.logout.bind(this)
        
    }
    componentDidMount(){
        var user = fire.auth().currentUser;
        this.setState({ user });
    }
    logout(){
        fire.auth().signOut();
    }
    render(){
        return(
            <div className="Profile">
                <div className="Profile_Yoga_List">
                <header className="App-header">
                        <h1>Know Your Yoga</h1>
                </header>
                </div>
                <div className="Profile_Side">
                    <h1>Welcome to your profile</h1>
                    <button onClick={this.logout} className="PageSwitcher__Item">Logout</button>
                </div>
            </div>
        )
    }
}

export default Profile;