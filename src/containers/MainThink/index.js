import React from 'react';

import Slot from './../Slot';

import docs from './../../docs/cn/MainThink';

export default class MainThink extends React.PureComponent {
  render() {
    return <Slot docs={ docs } />
  }
}
