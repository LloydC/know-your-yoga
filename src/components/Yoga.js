import React from 'react';
import Collapsible from 'react-collapsible';

class Yoga extends React.Component {
<<<<<<< HEAD
    state = {
        on: false,
    }

    Toggle = ()=> {
        this.setState({on: !this.state.on})
    }
=======
    constructor(props) {
    super(props);
    this.state = {isBoxVisible: false};
  }
    toggleBox = () => {
  this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
  console.log("working!")
};
>>>>>>> 47b978c1e305124dd3d6a57444acd4136ae306a6
    render(){
        const { name, description, benefits, image } = this.props.details;
        const { isBoxVisible } = this.state;
        return (
<<<<<<< HEAD
            <div className="yoga">
                <h1>{name}</h1>
                <img src={image} alt="yoga pic" width="100px" height="100px"></img>
                <br></br>
                {this.state.on && <><span>{benefits}</span><p>{description}</p></>}
                <button onClick={this.Toggle}>More Information</button>
            </div>
=======
                <Collapsible trigger={name} className={`yoga${isBoxVisible ? " visible" : " hidden"}`} onClick={this.toggleBox}>
                    <img src={image} alt="yoga pic" width="100px" height="100px"></img>
                    <br></br>
                    <span>{benefits}</span>
                    <p>{description}</p>
                </Collapsible>  
        
>>>>>>> 47b978c1e305124dd3d6a57444acd4136ae306a6
        )
    }
}

export default Yoga;