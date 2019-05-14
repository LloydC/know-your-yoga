import React from "react";

class Yoga extends React.Component {
    render(){
        const { name, description, benefits, image } = this.props.details;
        return (
            <div className="yoga">
                <h1>{name}</h1>
                <img src={image} alt="yoga pic" width="100px" height="100px"></img>
                <br></br>
                <span>{benefits}</span>
                <p>{description}</p>
            </div>
        )
    }
}

export default Yoga;