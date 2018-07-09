import React from 'react';

import Slot from './../Slot';

import docs from './../../docs/cn/Flux';

export default class Flux extends React.PureComponent {
  render() {
    return <Slot docs={ docs } />
  }
}
