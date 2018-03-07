import React from 'react';
import {
  NavLink
} from 'react-router-dom';

import Layout from './../../../components/Layout';
import { isActive } from './../../../common';

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
      return <ul key={ route.path }>
        <li className="r-ui-menu" key={route.path+"-root"}>
          { items[route.path] }
        </li>
        {
          route.children && route.children.map( (child) => {
            return <NavLink
                to={ child.path }
                activeClassName="menu-item-active"
                isActive={ isActive(child.path) }
                key={ child.path } >
                <li className="r-ui-menu-item">
                  - { items[child.path] }
                </li>
              </NavLink>
          })
        }
      </ul>;
    });
  }

  render() {
    return this.state.menus;
  }
}
