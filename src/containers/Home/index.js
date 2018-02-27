import React from 'react';
import marked from 'marked';

import './../../styles/home/index.css';
import Document from './../../docs/cn/Home';

export default class Home extends React.PureComponent {
  render() {
    return <div className="r-ui-home markdown-body"
      dangerouslySetInnerHTML={{__html: marked(Document)}}>
    </div>
  }
}
