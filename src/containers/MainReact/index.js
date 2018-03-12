import React from 'react';

import Slot from './../Slot';

import docs from './../../docs/cn/MainReact';

export default class MainReact extends React.PureComponent {
  render() {
    return <Slot docs={ docs } />
  }
}
