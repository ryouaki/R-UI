import React from 'react';
import marked from 'marked';

export default class Section extends React.PureComponent {
  render() {
    return <section 
      dangerouslySetInnerHTML={{__html: marked(this.props.content)}}
    />
  }
}
