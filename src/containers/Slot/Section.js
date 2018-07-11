import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});//基本设置

export default class Section extends React.PureComponent {
  render() {
    return <section 
      dangerouslySetInnerHTML={{__html: marked(this.props.content)}}
    />
  }
}
