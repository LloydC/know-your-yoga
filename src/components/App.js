import React from 'react';
import Header from './Header';
import YogaList from './Yoga-list';
import yogaStyles from './yoga-styles';

class App extends React.Component {

  state = {
    yogas: {}
  }

  loadYogaStyles = (event) => {
    this.setState({yogas: yogaStyles});
  }

  render(){
    return (
      <div className="know-your-yoga">
        <Header/>
        <YogaList yogas={this.state.yogas} loadYogaStyles={this.loadYogaStyles}/>
      </div>
    );
  }
  
}

export default App;
