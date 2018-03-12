import React from 'react';
import marked from 'marked';

export default class Sample extends React.PureComponent {
  render() {
    let {
      content = '',
      src = [],
      demo = null
    } = this.props;

    return <React.Fragment>
      <div dangerouslySetInnerHTML={{__html: marked(content)}}/>
      {
        src.map( (source, index) => {
          return <div key={index}>
              <p>{source.name}</p>
              <div dangerouslySetInnerHTML={{__html: marked(source.code)}} />
            </div>
        })
      }
      <div>
        { demo() }
      </div>
    </React.Fragment>
  }
}
