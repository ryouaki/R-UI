import React from 'react';

import Slot from './../Slot';

import docs from './../../docs/cn/MainBase';

export default class MainBase extends React.PureComponent {
  render() {
    return <Slot docs={ docs } />
  }
}
