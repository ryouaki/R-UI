import React from 'react';
import {
  NavLink
} from 'react-router-dom';

import Layout from './../../../components/Layout';

export default class Menu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      menus: null
    };
  }

  componentDidMount() {
    const {
      items = {},
      routes = []
    } = this.props;

    this.routesMapMenus(routes, items);
  }

  routesMapMenus(routes, items) {
    // 虚拟从后台拉取路由设置
    new Promise(() => {
      this.setState({
        menus: this.makeMenu(routes, items)
      });
    });
  }

  makeMenu(routes, items) {
    return routes.map( (route) => {
      return null;
    });
  }

  render() {
    return this.state.menus;
  }
}
