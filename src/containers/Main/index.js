import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import * as Layout from './../../components/Layout';
import Menu from './fragments/Menu';
import Article from './fragments/Article';
import Bundle from './../../components/Bundle';
import docs from './../../docs/cn/menu';
import routes from './../../router';

import './../../styles/main/index.css';

export default class Main extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      routes: this.createRoute()
    }
  }

  createRoute() {
    let routeMap = [];
    routes.forEach( (root) => {
      routeMap = routeMap.concat(root.children.map( (route) => {
        return <Route path={ route.path } key={ route.path }
          component={ route.component }/>
      }));
    });
    routeMap.push(<Route key={ '/nomatch' } component={(props) => {
      return <Bundle load={ () => import('./../NoMatch') }>
          { Component => <Component {...props} /> }
        </Bundle>
    }} />);
    return <Switch>
        { routeMap }
      </Switch>;
  }

  render() {
    return <Layout.Row align="between" className="r-ui-main">
      <Layout.Col flex="fixed" className="r-ui-menu">
        <Menu items={docs} routes={routes}/>
      </Layout.Col>
      <Layout.Col flex="growAndShrink">
        <Article>
          {
            this.state.routes
          }
        </Article>
      </Layout.Col>
    </Layout.Row>
  }
}
