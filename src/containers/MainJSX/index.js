import React from 'react';

import Slot from './../Slot';

import docs from './../../docs/cn/MainJSX';

export default class MainJSX extends React.PureComponent {
  render() {
    return <Slot docs={ docs } />
  }
}
