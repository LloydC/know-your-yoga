import React from 'react';
import Collapsible from 'react-collapsible';

class Yoga extends React.Component {
    constructor(props) {
    super(props);
    this.state = {isBoxVisible: false};
  }
    toggleBox = () => {
  this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
  console.log("working!")
};
    render(){
        const { name, description, benefits, image } = this.props.details;
        const { isBoxVisible } = this.state;
        return (
                <Collapsible trigger={name} className={`yoga${isBoxVisible ? " visible" : " hidden"}`} onClick={this.toggleBox}>
                    <img src={image} alt="yoga pic" width="100px" height="100px"></img>
                    <br></br>
                    <span>{benefits}</span>
                    <p>{description}</p>
                </Collapsible>  
        
        )
    }
}

export default Yoga;