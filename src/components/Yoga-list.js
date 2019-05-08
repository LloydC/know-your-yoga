import React from "react";
import Yoga from "./Yoga";

class YogaList extends React.Component{
    render(){
        return (
            <div className="yogalist">
                <h1>Yoga List</h1>
                <button onClick={this.props.loadYogaStyles}>Load Yoga styles</button>
                <div className="yoga-parent">
                {Object.keys(this.props.yogas).map(key => 
                    <Yoga key={key} index={key} details={this.props.yogas[key]}/>
                )}
                </div>
                
            </div>
        );
    }
} 

export default YogaList;