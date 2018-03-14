import React from 'react';
import {
  getPublicUrl
} from './../../common';

export default class Image extends React.PureComponent {
  render() {
    return <p align='center'>
      <img src={getPublicUrl(this.props.src)} alt={this.props.alt}/>
    </p>
  }
}
