import React from 'react';
import Layout from './../../../components/Layout';

export default [
  {
    type: 'section',
    content: `
# Layout(布局)

这里是介绍如何使用 React 完成一个基于 Flex 的布局组件。下面是我在 R-UI 中写的布局组件在该项目中的使用：

\`\`\`JSX
  class Container extends React.Component {

    render() {
      return <Layout.Row direction="col" className="container">
        <Layout.Col flex="fixed">
          <Header key="header"/>
        </Layout.Col>
        <Layout.Col flex="growAndShrink">
          <Switch>
            <Route exact path={ getPublicUrl('/') } component={ (props) => {
                  return <Bundle load={ () => import('./Home') }>
                    { Home => <Home {...props} /> }
                  </Bundle>
                } 
              }/>
            <Route path={ getPublicUrl('/main') } component={ (props) => {
                  return <Bundle load={ () => import('./Main') }>
                    { Articles => <Articles {...props} /> }
                  </Bundle>
                } 
              }/>
            <Route path={ getPublicUrl('/about') } component={ (props) => {
                  return <Bundle load={ () => import('./About') }>
                    { Articles => <Articles {...props} /> }
                  </Bundle>
                } 
              }/>
          </Switch>
        </Layout.Col>
        <Layout.Col flex="fixed">
          <Footer key="footer"/>
        </Layout.Col>
      </Layout.Row>
    }
  }
\`\`\`

Layout.Row 是布局的行，Layout.Col 是布局的列。在我的团队当中，我是禁止团队成员使用布局组件的，而是自己去用 css 来完成布局功能。这是一个前端工程师基本的技能。
    `,
  },
  {
    type: 'sample',
    src: [
      {
        name: 'demo1.jsx',
        code: `
\`\`\`jsx
  class Demo extends React.Component {
    render() {
      return <Layout.Row>
        <Layout.Col>
          <div style={{background: 'green', width: '200px', height: '50px'}}>Layout.Col</div>
        </Layout.Col>
        <Layout.Col>
          <div style={{background: "yellow", width: '200px', height: '50px'}}>Layout.Col</div>
        </Layout.Col>
      </Layout.Row>
    }
  }
\`\`\`
        `
      }
    ],
    demo: () => {
      class Demo extends React.Component {
        render() {
          return <Layout.Row>
            <Layout.Col>
              <div style={{background: 'green', width: '200px', height: '50px'}}>Layout.Col</div>
            </Layout.Col>
            <Layout.Col>
              <div style={{background: "yellow", width: '200px', height: '50px'}}>Layout.Col</div>
            </Layout.Col>
          </Layout.Row>
        }
      }

      return <Demo />
    }
  },
  {
    type: 'section',
    content: `
从上面我们可以看到，Layout 布局组件并不提供设定宽高的功能因此需要子元素把它撑开。这是因为 Layout 仅仅提供一个横纵布局的功能，以及布局后的排序功能。类似一个 Flex 布局的功能，保证功能的纯粹，职责的单一。

对于布局组件，我们要提供基本的布局功能，但是同时，我们还要提供足够的扩展性和尽可能适应更多场景的布局功能。

- 自定义布局方式
- 自定义外联，内联样式

我们需要提供这些充足的接口才能保证组件能够满足更多的场景，同时也需要提供基本的默认配置满足基本的布局需要。

## 接口设计

布局方式通常我们需要满足以下几种功能：

- 水平布局
  - 水平居中
  - 左右分散
  - 左对齐
  - 右对齐
  - 左右对齐

- 垂直布局
  - 至上而下布局
  - 至下而上布局

- 居中布局
  - 相对浏览器垂直水平居中
  - 相对网页内容垂直水平居中

因此我们需要在 Row 中提供如下几种接口来满足需要：

- direction ['row', 'col'] 分别对应是水平布局还是垂直布局
- align ['left', 'right', 'center', 'between', 'around'] 分别满足左对齐，右对齐，居中对齐，左右分散对齐，左右平均分布

在 Col 中提供以下接口来配合 Row 来满足各种布局需要：

- flex ['fixed', 'grow', 'growAndShrink', 'shrink'] 每一个单元格的缩放方式，同 flex
- alignSelf ['center', 'start', 'end', 'normal'] 提供每一个子元素的对齐方式，同 align-self

当然为了扩展性，又增加了自定义接口，也就是说在 Row 和 Col 中添加的任何 props 属性都会自动附着到组件的外层 Dom 元素上：
- className String 自定义样式
- others 任意可扩充属性。但是必须遵守 Html 标签属性规范

出于对于组件稳定性和严谨性的考虑。这里使用了类型验证。用来判断参数是否是合规参数：

\`\`\`js
  static propTypes = {
    align: PropTypes.oneOf(['left', 'right', 'center', 'between', 'around']),
    className: PropTypes.string,
    direction: PropTypes.oneOf(['row', 'col'])
  }

  if (React.Children.count(children) <= 0) {
    throw new Error(\`Layout.Row must work with least one child type of Layout.Col!\`)
  }

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child) || child.type !== Col) {
      throw new Error(\`Layout.Row must work with Layout.Col! The type of current child is [ \${child.type} ]\`)
    }
  })
\`\`\`

因此我们最终完成的布局组件代码如下：
    `
  },
  {
    type: 'sample',
    src: [
      {
        name: 'index.js',
        code: `
\`\`\`jsx
  import Row from './Row';
  import Col from './Col';

  import './styles/index.css';

  export default {
    Row,
    Col
  }
\`\`\`
        `
      },
      {
        name: 'Row.js',
        code: `
\`\`\`jsx
  import React from 'react';
  import PropTypes from 'prop-types';
  import classnames from 'classnames';
  import Col from './Col';

  export default class Row extends React.PureComponent {

    static propTypes = {
      align: PropTypes.oneOf(['left', 'right', 'center', 'between', 'around']),
      className: PropTypes.string,
      direction: PropTypes.oneOf(['row', 'col'])
    }

    static defaultProps = {
      align: 'left',
      chassName: '',
      direction: 'row'
    }

    render() {
      let {
        align,
        children,
        className,
        direction
      } = this.props;

      if (React.Children.count(children) <= 0) {
        throw new Error(\`Layout.Row must work with least one child type of Layout.Col!\`)
      }

      React.Children.forEach(children, (child) => {
        if (!React.isValidElement(child) || child.type !== Col) {
          throw new Error(\`Layout.Row must work with Layout.Col! The type of current child is [ \${child.type} ]\`)
        }
      })

      return <div className={ classnames('row', 'direction-' + direction, align, className) }>
          { children }
        </div>
    }
  }
\`\`\`
        `
      },
      {
        name: 'Col.js',
        code: `
\`\`\`jsx
  import React from 'react';
  import PropTypes from 'prop-types';
  import classnames from 'classnames';

  export default class Col extends React.PureComponent {

    constructor(props) {
      super(props);

      this.CONSTANT_FLEX = {
        'fixed': 'fixed',  // 固定不变
        'grow': 'grow-only', // 只变大不变小
        'growAndShrink': 'grow-and-shrink', // 又能变大，又能变小
        'shrink': 'shrink-only' // 只缩小，不变大
      };
    }

    static propTypes = {
      flex: PropTypes.oneOf(['fixed', 'grow', 'growAndShrink', 'shrink']),
      alignSelf: PropTypes.oneOf(['center', 'start', 'end', 'normal']),
      className: PropTypes.string
    }

    static defaultProps = {
      flex: 'shrink',
      className: '',
      alignSelf: 'normal'
    }

    render() {
      let {
        flex,
        children,
        alignSelf,
        className,
        ...others
      } = this.props;
      
      return <div {...others} className={classnames('col', alignSelf+'-self', this.CONSTANT_FLEX[flex], className)}>
          { children }
        </div>
    }
  }
\`\`\`
        `
      },
      {
        name: 'styles/index.less',
        code: `
\`\`\`less
  .r-ui {
    .row {
      width: 100%;
      display: flex;
      flex-wrap: nowrap;

      &.right {
        justify-content: flex-end;
      }
      &.left {
        justify-content: flex-start;
      }
      &.center {
        justify-content: center;
      }
      &.between {
        justify-content: space-between;
      }
      &.around {
        justify-content: space-around;
      }

      &.direction-row {
        flex-direction: row;
      }

      &.direction-col {
        flex-direction: column;
      }

      .col {
        &.fixed { // 不变大，也不变小
          flex-grow: 0;
          flex-shrink: 0;
        }
        &.grow-only { // 变大，不变小
          flex-grow: 1;
          flex-shrink: 0;
        }
        &.grow-and-shrink { // 变大，也变小
          flex-grow: 1;
          flex-shrink: 1;
        }
        &.shrink-only { // 不变大，只变小
          flex-grow: 0;
          flex-shrink: 1;
        }
      
        &.center-self {
          align-self: center;
        }
  
        &.start-self {
          align-self: start;
        }
  
        &.end-self {
          align-self: end;
        }
  
        &.normal-self {
          align-self: normal;
        }
      }
    }
  }  
\`\`\`
        `
      }
    ]
  },
  {
    type: 'section',
    content: `
## 使用    

### 一个典型的使用场景，左右布局，一侧固定，另一侧自适应宽度

Layout.Col 的接口可以帮我们设置当前块的缩放方式 growAndShrink 标示空间不足就缩小，空间足够就放大
    `,
  },
  {
    type: 'sample',
    src: [
      {
        name: '左侧固定右侧自适应布局.jsx',
        code: `
\`\`\`js
  class Demo1 extends React.Component {
    render() {
      return <Layout.Row>
        <Layout.Col>
          <div style={{width: '200px', height: '50px', background: 'red'}}>
            固定200px
          </div>
        </Layout.Col>
        <Layout.Col flex='growAndShrink'>
          <div style={{height: '50px', background: 'green'}}>
            自己变大缩小
          </div>
        </Layout.Col>
      </Layout.Row>
    }
  }
\`\`\`    
        `
      },
      {
        name: '右侧侧固定左侧侧自适应布局.jsx',
        code: `
\`\`\`js
  class Demo2 extends React.Component {
    render() {
      return <Layout.Row>
        <Layout.Col flex='growAndShrink'>
          <div style={{height: '50px', background: 'red'}}>
            自己变大缩小
          </div>
        </Layout.Col>
        <Layout.Col>
          <div style={{width: '200px', height: '50px', background: 'green'}}>
            固定200px
          </div>
        </Layout.Col>
      </Layout.Row>
    }
  }
\`\`\`    
        `
      }
    ],
    demo: () => {
      class Demo1 extends React.Component {
        render() {
          return <Layout.Row>
            <Layout.Col>
              <div style={{width: '200px', height: '50px', background: 'red'}}>
                固定200px
              </div>
            </Layout.Col>
            <Layout.Col flex='growAndShrink'>
              <div style={{height: '50px', background: 'green'}}>
                自己变大缩小
              </div>
            </Layout.Col>
          </Layout.Row>
        }
      }

      class Demo2 extends React.Component {
        render() {
          return <Layout.Row>
            <Layout.Col flex='growAndShrink'>
              <div style={{height: '50px', background: 'red'}}>
                自己变大缩小
              </div>
            </Layout.Col>
            <Layout.Col>
              <div style={{width: '200px', height: '50px', background: 'green'}}>
                固定200px
              </div>
            </Layout.Col>
          </Layout.Row>
        }
      }

      return <React.Fragment>
          <Demo1/>
          <Demo2/>
        </React.Fragment>
    }
  },
  {
    type: 'section',
    content: `  
### 如何做一个水平居中布局

Layout.Row 为我们提供了组件内块级元素的排列方式接口 align，其中 center 是让子组件水平居中对齐
    `,
  },
  {
    type: 'sample',
    src: [
      {
        name: '水平居中布局.jsx',
        code: `
\`\`\`js
  class Demo extends React.Component {
    render() {
      return <Layout.Row align="center">
        <Layout.Col>
          <div style={{width: '200px', height: '50px', background: 'red'}}>
            固定200px
          </div>
        </Layout.Col>
      </Layout.Row>
    }
  }
\`\`\`    
        `
      }
    ],
    demo: () => {
      class Demo extends React.Component {
        render() {
          return <Layout.Row align="center">
            <Layout.Col>
              <div style={{width: '200px', height: '50px', background: 'red'}}>
                固定200px，并且居中对其
              </div>
            </Layout.Col>
          </Layout.Row>
        }
      }

      return <Demo />
    }
  },
  {
    type: 'section',
    content: `  
### 垂直布局

Layout.Row 提供 direction 接口可以设定子元素的排列方式，默认是 row - 行布局。
    `,
  },
  {
    type: 'sample',
    src: [
      {
        name: '垂直布局.jsx',
        code: `
\`\`\`js
  class Demo extends React.Component {
    render() {
      return <Layout.Row direction="col">
        <Layout.Col>
          <div style={{width: '200px', height: '50px', background: 'red'}}>
            固定200px
          </div>
        </Layout.Col>
        <Layout.Col>
          <div style={{width: '200px', height: '50px', background: 'yellow'}}>
            固定200px
          </div>
        </Layout.Col>
        <Layout.Col>
          <div style={{width: '200px', height: '50px', background: 'green'}}>
            固定200px
          </div>
        </Layout.Col>
      </Layout.Row>
    }
  }
\`\`\`    
        `
      }
    ],
    demo: () => {
      class Demo extends React.Component {
        render() {
          return <Layout.Row direction="col">
            <Layout.Col>
              <div style={{width: '200px', height: '50px', background: 'red'}}>
                固定200px
              </div>
            </Layout.Col>
            <Layout.Col>
              <div style={{width: '200px', height: '50px', background: 'yellow'}}>
                固定200px
              </div>
            </Layout.Col>
            <Layout.Col>
              <div style={{width: '200px', height: '50px', background: 'green'}}>
                固定200px
              </div>
            </Layout.Col>
          </Layout.Row>
        }
      }

      return <Demo />
    }
  },
  {
    type: 'section',
    content: `  
### 做一个垂直居中，水平居中怎么样
    `,
  },
  {
    type: 'sample',
    src: [
      {
        name: '.jsx',
        code: `
\`\`\`js
  class Demo extends React.Component {
    render() {
      return <Layout.Row align='center'>
        <Layout.Col style={{height: '200px', width: '200px'}}>
          <Layout.Row style={{height: '100%'}} align="center">
            <Layout.Col style={{height: '50px', width: '50px', background: 'red'}} alignSelf='center'>
              我在中间
            </Layout.Col>
          </Layout.Row>
        </Layout.Col>
      </Layout.Row>
    }
  }
\`\`\`    
        `
      }
    ],
    demo: () => {
      class Demo extends React.Component {
        render() {
          return <Layout.Row align='center'>
            <Layout.Col style={{height: '200px', width: '200px'}}>
              <Layout.Row style={{height: '100%'}} align="center">
                <Layout.Col style={{height: '100px', width: '100px', background: 'red'}} alignSelf='center'>
                  我在中间
                </Layout.Col>
              </Layout.Row>
            </Layout.Col>
          </Layout.Row>
        }
      }

      return <Demo />
    }
  }
]