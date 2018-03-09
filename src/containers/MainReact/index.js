import React from 'react';

import Section from './../Slot/Section';
import Sample from './../Slot/Sample';

import docs from './../../docs/cn/MainReact';

export default class MainReact extends React.PureComponent {
  render() {
    return docs.map( (doc, index) => {
      let component = null;
      switch(doc.type) {
        case 'section':
          component = <Section key={ doc.type + index } content={ doc.content } />;
          break;
        case 'sample':
          component = <Sample key={ doc.type + index } { ...doc } />;
        default:
          break;
      }
      return component;
    })
  }
}
