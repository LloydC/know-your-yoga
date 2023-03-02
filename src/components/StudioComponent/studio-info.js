import React, {PureComponent} from 'react';

export default class StudioInfo extends PureComponent {
  render() {
    const {info} = this.props;
    const displayName = `${info.studio}`;
    const displayAddress = `${info.address}`
    const signupLink = `${info.booking_URL}`
    const studioImg = `${info.studioPicture}`;

    return (
        <div>
          <span style={{color: 'black'}}>{displayName} |{' '}</span>
          <img alt='studio_img' src={studioImg} width={'100%'} height={'50%'}/> 
          <br/>
          <span style={{color: 'black'}}>{displayAddress}|{' '}</span>
          <br/>
          <a target="_new" href={`${signupLink}`}>Sign up link</a>
        </div>

    );
  }
}
