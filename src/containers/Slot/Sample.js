import React from 'react';
import marked from 'marked';
import classnames from 'classnames';

const CodePanel = (props) => {
  return <div className="sample-panel">
    <ul>
      {
        props.codes.map( (code, index) => {
          return <li 
              key={index} 
              className={classnames({'active': props.currentTab === index})}
              onClick={() => {
                props.clickTabHandler(index);
            }}>
            { code.name }
          </li>
        })
      }
    </ul>
    {
      props.children[props.currentTab]
    }
  </div>
}

export default class Sample extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      currentTab: 0
    }
  }

  createSample() {
    let {
      src = [],
      demo = () => {}
    } = this.props;

    return {
      code: <CodePanel 
        codes={src} 
        currentTab={this.state.currentTab}
        clickTabHandler={ (index) => {
          this.setState({
            currentTab: index
          })
        }}>
        {
          src.map( (source, index) => {
            return <div key={index} dangerouslySetInnerHTML={{__html: marked(source.code)}} />
          })
        }
      </CodePanel>,
      demo: <div className="sample-demo"> 
        <p>结果</p>
        { demo() }
      </div>
    }
  }

  render() {
    let {
      code = [],
      demo = null
    } = this.createSample();

    return <React.Fragment>
      { code }
      { demo }
    </React.Fragment>
  }
}
