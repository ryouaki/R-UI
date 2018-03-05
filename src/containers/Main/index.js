import React from 'react';

import Layout from './../../components/Layout';
import Menu from './fragments/Menu';

export default class Main extends React.PureComponent {
  render() {
    return <Layout.Row align="between" className="r-ui-main">
      <Layout.Col flex="fixed" width={260}>
        <Menu/>
      </Layout.Col>
      <Layout.Col flex="growAndShrink">
        
      </Layout.Col>
    </Layout.Row>
  }
}
