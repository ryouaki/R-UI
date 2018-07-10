import React from 'react';

import Slot from './../../Slot';

export default class ArticleTmpl extends React.PureComponent {
  render() {
    return <Slot docs={ this.props.docs } />
  }
}
