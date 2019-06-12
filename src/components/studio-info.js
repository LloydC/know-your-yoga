import React, {PureComponent} from 'react';

export default class StudioInfo extends PureComponent {
  render() {
    const {info} = this.props;
    const displayName = `${info.studio}`;
    const displayAddress = `${info.address}`
    const signupLink = `${info.booking_URL}`

    return (
        <div>
          {displayName} |{' '}
          {displayAddress}|{' '}
          <a target="_new" href={`${signupLink}`}>Sign up link</a>
        </div>

    );
  }
}
