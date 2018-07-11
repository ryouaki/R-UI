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

Layout.Row 是布局的行，Layout.Col 是布局的列。
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
          <div style={{background: 'green', width: '200px', height: '200px'}}></div>
        </Layout.Col>
        <Layout.Col>
          <div style={{background: "yellow", width: '200px', height: '200px'}}></div>
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
              <div style={{background: 'green', width: '200px', height: '200px'}}></div>
            </Layout.Col>
            <Layout.Col>
              <div style={{background: "yellow", width: '200px', height: '200px'}}></div>
            </Layout.Col>
          </Layout.Row>
        }
      }

      return <Demo />
    }
  }
]