import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

class Yoga extends Component {
    state = {
        on: false,
    }

    Toggle = ()=> {
        this.setState({on: !this.state.on})
    }
    render(){
        const { name, description, benefits, image } = this.props.details;
        return (
            <div className="yogaCard">
                <img src={image} alt="yoga pic" width="100%" height="50%" onClick={this.props.renderMarker}></img>
                <div style={{
                    height: '50%',
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-evenly'
                    }}>
                    <h3>{name}</h3>
                    <Button variant={this.state.on? "outline-info": "info"} onClick={this.Toggle}>{this.state.on? "Hide Yoga style information": "Display Yoga style information"}</Button>
                    {this.state.on && <div><span>{benefits}</span><p>{description}</p></div>}
                </div>
            </div>
        
        )
    }
}

export default Yoga;