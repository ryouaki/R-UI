import React from 'react';

import Slot from './../Slot';

import './../../styles/home/index.css';
import docs from './../../docs/cn/Home';

export default class Home extends React.PureComponent {
  render() {
    return <div className="r-ui-home markdown-body">
      <Slot docs={ docs } />
    </div>
  }
}
