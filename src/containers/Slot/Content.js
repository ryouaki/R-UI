import React from 'react';

import Section from './../Slot/Section';
import Sample from './../Slot/Sample';

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
        default:
          break;
      }
      return component;
    })
  }
}
