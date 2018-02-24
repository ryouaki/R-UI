import React from 'react';
import Header from './header';

import './../styles/index.css';

export default class Container extends React.PureComponent {
  render() {
    return <div className="r-ui container">
      <Header/>
    </div>
  }
}
