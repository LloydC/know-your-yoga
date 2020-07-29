import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

class YogaForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            benefits: '',
            image: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addYogaStyle = this.addYogaStyle.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(`Form data ${this.state}`);
    }

    addYogaStyle(e){
      e.preventDefault();
      // fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      // .then( u => console.log(u))
      // .catch(err => console.error(err))
    }

    render() {
        return (
        <Collapsible className="FormCenter hvr-grow" trigger="Click here to add a new yoga style" >
            <form onSubmit={this.handleSubmit} className="FormFields">
              <br/>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Yoga Style Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter style name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="description">Description</label>
                <input type="text" id="description" className="FormField__Input" placeholder="Enter a description" name="description" value={this.state.description} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="benefits">Benefits</label>
                <input type="text" id="benefits" className="FormField__Input" placeholder="Health benefits" name="benefits" value={this.state.benefits} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="benefits">Image</label>
                <input type="file" id="image" className="FormField__Input" name="image" value={this.state.image} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                  <button onClick={this.addYogaStyle} className="FormField__Button mr-20">Add new Yoga style</button>
              </div>
            </form>
        </Collapsible>
        );
    }
}
export default YogaForm;