import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Layout from './../../components/Layout';
import Menu from './fragments/Menu';

import Document from './../../docs/cn/Menu';
import Routes from './../../router';

export default class Main extends React.PureComponent {

  render() {
    return <Layout.Row align="between" className="r-ui-main">
      <Layout.Col flex="fixed" width={260}>
        <Menu items={Document} routes={Routes}/>
      </Layout.Col>
      <Layout.Col flex="growAndShrink">
        <Switch>

        </Switch>
      </Layout.Col>
    </Layout.Row>
  }
}
