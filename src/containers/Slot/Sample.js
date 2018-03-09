import React from 'react';
import marked from 'marked';
import hljs from 'highlight';
hljs.initHighlightingOnLoad();
export default class Sample extends React.PureComponent {
  render() {
    let {
      content = '',
      src = [],
      demo = null
    } = this.props;

    return <section>
      <div dangerouslySetInnerHTML={{__html: marked(this.props.content)}}/>
      {
        src.map( (source, index) => {
          return <div key={index}>
              <p>{source.name}</p>
              <div dangerouslySetInnerHTML={{__html: hljs.highlightBlock(marked(source.code))}} />
            </div>
        })
      }
    </section>
  }
}
