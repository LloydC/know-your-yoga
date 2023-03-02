import React, {
    Component
} from 'react';
import fire from '../utils/firebase';
import yogaStyles from '../data/yoga-styles';
import Yoga from "../components/YogaComponent/Yoga";
import YogaForm from "../components/FormComponents/YogaForm";
import Map from '../components/MapComponent/Map';
import defaultUserImg from '../assets/images/default-user.png'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            yoga_list: yogaStyles,
            displayContainer: 'yogaStyles'
        }
        this.logout = this.logout.bind(this)
    }
    logout() {
        fire.auth().signOut();
    }

    render() {
        const user = fire.auth().currentUser;

        return ( 
            <div className="Profile" >
                <div className="Profile_Yoga_List" >
                    <header className="Profile-header" >
                    <h1 onClick= {this.renderMarker}> Know Your Yoga </h1> 
                    {this.state.displayContainer === 'yogaStyles' ? 
                    <div className="User_Info" >
                        <ul className="yogaList" > 
                            {
                                Object.keys(this.state.yoga_list).map(key =>
                                    <Yoga 
                                        key={key} 
                                        index={key}
                                        details= {this.state.yoga_list[key]}
                                        renderMarker = {this.renderMarker}
                                    />
                                )
                            } 
                        </ul>  
                    </div> : 
                    <div className='yogaMap'>
                        <Map /> 
                    </div>
                    }
                    </header> 
                </div> 
                <div className="Profile_Side" >
                    <h1> Welcome {user.email} </h1> 
                    <img src={defaultUserImg} alt={'user_image'} width={'100px'} height={'100px'} style={{borderRadius: '75%'}}/>
                    <br />
                    <button onClick={this.logout} className="PageSwitcher__Item"> Logout </button> 
                    <div className='displayContainer'>
                        <button className='displayBtn' onClick={()=> this.setState({...this.state, displayContainer: this.state.displayContainer === 'yogaStyles' ? "yogaMap" : "yogaStyles"})}>{ this.state.displayContainer !== 'yogaStyles' ? "Display yoga styles" : "Display yoga map"}</button>
                        <YogaForm />
                    </div>
                </div>   
            </div >
        )
    }
}
export default Profile;