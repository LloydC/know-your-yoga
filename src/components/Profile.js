import React, { Component } from 'react';
import fire from './firebase';
import yogaStyles from './yoga-styles';
import Yoga from "./Yoga";
import YogaForm from "./YogaForm"
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {},
            yoga_list: yogaStyles,
        }
        this.logout = this.logout.bind(this)
        
    }
    logout(){
        fire.auth().signOut();
    }
    render(){
        var user = fire.auth().currentUser;
        var email;

        const style = {
            width: '25%',
            height: '25%'
          }

        if (user != null) {
            email = user.email;
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
                    <YogaForm/>
                    <Map google={this.props.google} zoom={14} style={style}>
                        <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />
                    </Map>
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: (`${process.env.REACT_APP_googleApiKey}`)
  })(Profile)