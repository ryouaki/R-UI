import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Layout from './../../components/Layout';
import Menu from './fragments/Menu';
import Bundle from './../../components/Bundle';
import docs from './../../docs/cn/Menu';
import routes from './../../router';

import './../../styles/main/index.css';

export default class Main extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      routes: []
    }
  }

  componentDidMount() {
    this.createRoute();
  }

  createRoute() {
    // 虚拟从后台拉取路由设置
    new Promise(() => {
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
      this.setState({
        routes: <Switch>
          { routeMap }
        </Switch>
      });
    });
  }

  render() {
    return <Layout.Row align="between" className="r-ui-main">
      <Layout.Col flex="fixed" className="r-ui-menu">
        <Menu items={docs} routes={routes}/>
      </Layout.Col>
      <Layout.Col flex="growAndShrink">
        {
          this.state.routes
        }
      </Layout.Col>
    </Layout.Row>
  }
}
