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
    
    logout(){
        fire.auth().signOut();
    }
    render(){
        var user = fire.auth().currentUser;
        var name, email, photoUrl, uid, emailVerified;

        if (user != null) {
            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            emailVerified = user.emailVerified;
            uid = user.uid;  

        }
        return(
            <div className="Profile">
                <div className="Profile_Yoga_List">
                <header className="App-header">
                        <h1>Know Your Yoga</h1>
                </header>
                </div>
                <div className="Profile_Side">
                    <h1>Welcome to your profile {email}</h1>
                    <button onClick={this.logout} className="PageSwitcher__Item">Logout</button>
                </div>
            </div>
        )
    }
}

export default Profile;