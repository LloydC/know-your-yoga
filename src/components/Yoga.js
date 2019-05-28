import React from 'react';
import Collapsible from 'react-collapsible';

class Yoga extends React.Component {
    render(){
        const { name, description, benefits, image } = this.props.details;
        return (
            <div className="yoga">
                <Collapsible trigger={name}>
                    <img src={image} alt="yoga pic" width="100px" height="100px"></img>
                    <br></br>
                    <span>{benefits}</span>
                    <p>{description}</p>
                </Collapsible>
            </div>
        
        )
    }
}

export default Yoga;