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
                {/* <button onClick={this.Toggle}>Click here for more information</button> */}
                <Button variant="info" onClick={this.Toggle}>Click here for more information</Button>
            </div>
        
        )
    }
}

export default Yoga;