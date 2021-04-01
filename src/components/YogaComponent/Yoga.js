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
            <div className="yoga">
                <h1>{name}</h1>
                <img src={image} alt="yoga pic" width="100px" height="100px" onClick={this.props.renderMarker}></img>
                <br></br>
                {this.state.on && <><span>{benefits}</span><p>{description}</p></>}
        <Button variant={this.state.on?"info":"outline-info"} onClick={this.Toggle}>{this.state.on? "Click here for less info": "Click here for more info"}</Button>
            </div>
        
        )
    }
}

export default Yoga;