import React from 'react';
import Bundle from './../../components/Bundle';

export default class Slot extends React.PureComponent {
  render() {
    return <Bundle load={ () => import('./Content')}>
      { Component => <Component {...this.props} /> }
    </Bundle>
  }
}
