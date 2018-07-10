import React from 'react';

import Slot from './../Slot';

import docs from './../../docs/cn/MainRouter';

export default class MainRouter extends React.PureComponent {
  render() {
    return <Slot docs={ docs } />
  }
}
