import React, { Component } from 'react';
import fire from './firebase';
import yogaStyles from './yoga-styles';
import Yoga from "./Yoga";
import YogaForm from "./YogaForm"
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import logo from '../assets/yoga.png'

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoibGxveWQtY2hhbWJyaWVyIiwiYSI6ImNqcmh4NHd0ajJyZ3I0M24wZjJnOWVwZzgifQ.SaVzj9bmSvp4Zg7FhwC_Mg"
  });

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {},
            yoga_list: yogaStyles,
        }
        this.logout = this.logout.bind(this)
        this.renderMarker= this.renderMarker.bind(this)
    }
    logout(){
        fire.auth().signOut();
    }
    renderMarker(){
        // target the Layer component and inject a Feature component with the right coordinates
        console.log(this.layerRef)
    }
    render(){
        var user = fire.auth().currentUser;
        var email;

        if (user != null) {
            email = user.email;
        }
        return(
            <div className="Profile">
                <div className="Profile_Yoga_List">
                <header className="Profile-header">
                        <h1 onClick={this.renderMarker}>Know Your Yoga</h1>
                        <ul className="yogalist">                    
                            {Object.keys(this.state.yoga_list).map(key => 
                                <Yoga key={key} index={key} details={this.state.yoga_list[key]} onClick={this.renderMarker}/>
                            )}
                        </ul>
                </header>
                </div>
                <div className="Profile_Side">
                    <h1>Welcome to your profile {email}</h1>
                    <button onClick={this.logout} className="PageSwitcher__Item">Logout</button>
                    <YogaForm/>
                    <Map style="mapbox://styles/mapbox/streets-v11"
                        containerStyle={{
                            height: "220px",
                            width: "220px"
                        }} center={[4.899, 52.372]} zoom={[10.5]}>
                            <Marker coordinates={[4.9151, 52.3854]} anchor="center">
                                    <img src={logo} alt="logo" width="10px" height="10px"/>
                            </Marker>
                            <Marker coordinates={[4.8868,52.3861]} anchor="center">
                                    <img src={logo} alt="logo" width="10px" height="10px"/>
                            </Marker>
                            <Marker coordinates={[4.8782,52.3716]} anchor="center">
                                    <img src={logo} alt="logo" width="10px" height="10px"/>
                            </Marker>
                            <Marker coordinates={[4.8894,52.3815]} anchor="center">
                                    <img src={logo} alt="logo" width="10px" height="10px"/>
                            </Marker>
                            <Marker coordinates={[4.8863, 52.3853]} anchor="center">
                                    <img src={logo} alt="logo" width="10px" height="10px"/>
                            </Marker>
                            <Marker coordinates={[4.8909, 52.3770]} anchor="center">
                                    <img src={logo} alt="logo" width="10px" height="10px"/>
                            </Marker>
                            <Marker coordinates={[4.8557, 52.3672]} anchor="center">
                                    <img src={logo} alt="logo" width="10px" height="10px"/>
                            </Marker>
                            <Marker coordinates={[4.8521, 52.3582]} anchor="center">
                                    <img src={logo} alt="logo" width="10px" height="10px"/>
                            </Marker>
                            {/* <Layer
                            type="symbol"
                            id="marker"
                            layout={{ "icon-image": "marker-15" }}>
                                <Feature coordinates={[4.9151,52.3854]}/>
                                <Feature coordinates={[4.8868,52.3861]}/>
                                <Feature coordinates={[4.8782,52.3716]}/>
                                <Feature coordinates={[4.8894,52.3815]}/>
                                <Feature coordinates={[4.8863, 52.3853]}/>
                                <Feature coordinates={[4.8909, 52.3770]}/>
                                <Feature coordinates={[4.8557, 52.3672]}/>
                                <Feature coordinates={[4.8521, 52.3582]}/>
                            </Layer> */}
                    </Map>
                </div>
            </div>
        )
    }
}
export default Profile;