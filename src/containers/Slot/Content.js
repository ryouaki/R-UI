import React from 'react';

import Section from './../Slot/Section';
import Sample from './../Slot/Sample';
import Image from './../Slot/Image';

import './../../styles/slot/index.css';

export default class Content extends React.PureComponent {
  render() {
    return this.props.docs.map( (doc, index) => {
      let component = null;
      switch(doc.type) {
        case 'section':
          component = <Section key={ doc.type + index } content={ doc.content } />;
          break;
        case 'sample':
          component = <Sample key={ doc.type + index } { ...doc } />;
          break;
        case 'image':
          component = <Image key={ doc.type + index } { ...doc } />;
          break;
        default:
          break;
      }
      return component;
    })
  }
}
