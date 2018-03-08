import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Layout from './../../components/Layout';
import Bundle from './../../components/Bundle';
import Menu from './fragments/Menu';
import { getPublicUrl } from './../../common';

import Docs from './../../docs/cn/Menu';
import Routes from './../../router';

import './../../styles/main/index.css';

export default class Main extends React.PureComponent {

  render() {
    return <Layout.Row align="between" className="r-ui-main">
      <Layout.Col flex="fixed" className="r-ui-menu">
        <Menu items={Docs} routes={Routes}/>
      </Layout.Col>
      <Layout.Col flex="growAndShrink">
        <Switch>
          {
            Routes&&Routes.map( (route) => {
              return null;
            })
          }
        </Switch>
      </Layout.Col>
    </Layout.Row>
  }
}
