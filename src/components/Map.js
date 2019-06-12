import React, {Component} from 'react';
import ReactMapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import StudioPin from './studio-pin';
import StudioInfo from './studio-info';
import STUDIOS from '../data/studios.json';

const navStyle = {
  position: 'absolute',
  top: 36,
  right: 20,
  padding: '10px'
};

class Map extends Component {

  state = {
    viewport: {
      width: 240,
      height: 200,
      latitude: 52.372,
      longitude: 4.899,
      zoom: 12,
      bearing: 0,
      pitch: 0
    }
  };

  _onViewportChange = viewport => {
    if (viewport.longitude > 0) {
        viewport.longitude = 4.899;
    }
    this.setState({viewport});
  }

  _renderStudioMarker = (studio, index) => {
    return (
      <Marker key={`marker-${index}`} longitude={studio.longitude} latitude={studio.latitude}>
        <StudioPin size={15} onClick={() => this.setState({popupInfo: studio})} />
      </Marker>
    );
  };

  _renderPopup() {
    const {popupInfo} = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({popupInfo: null})}
        >
          <StudioInfo info={popupInfo}/>
        </Popup>
      )
    );
  }

  render() {
    return (
      <div>
        <ReactMapGL {...this.state.viewport} mapboxApiAccessToken={process.env.REACT_APP_TOKEN} mapStyle="mapbox://styles/mapbox/dark-v9" onViewportChange={viewport => this.setState({viewport})}>
        {STUDIOS.map(this._renderStudioMarker)}
        {this._renderPopup()}
        <div style={navStyle}>
          <NavigationControl />
        </div>
      </ReactMapGL>
      </div>
      
    );
  }
}

export default Map;
