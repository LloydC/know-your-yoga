import React, { Component } from 'react';
import fire from './firebase';
import yogaStyles from './yoga-styles';
import Yoga from "./Yoga";

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {},
            yoga_list: yogaStyles,
        }
        this.logout = this.logout.bind(this)
        this.expand = this.expand.bind(this);
        
    }
    expand(e){
      
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
                <header className="Profile-header">
                        <h1>Know Your Yoga</h1>
                        <ul className="yogalist">                    
                            {Object.keys(this.state.yoga_list).map(key => 
                                <Yoga key={key} index={key} details={this.state.yoga_list[key]} />
                            )}
                        </ul>
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