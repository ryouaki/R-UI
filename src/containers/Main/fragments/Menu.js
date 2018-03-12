import React from 'react';
import {
  NavLink
} from 'react-router-dom';

import { isActive } from './../../../common';

export default class Menu extends React.Component {

  constructor(props) {
    super(props);

    const {
      items = {},
      routes = []
    } = props;

    this.state = {
      menus: this.makeMenu(routes, items)
    };
  }

  makeMenu(routes, items) {
    return routes.map( (route) => {
      return <ul key={ route.path }>
        <li className="r-ui-menu-root" key={route.path+"-root"}>
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
