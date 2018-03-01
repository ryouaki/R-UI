import React from 'react';
import Layout from './../../components/Layout';
import {
  NavLink
} from 'react-router-dom';
import { connect } from 'react-redux';
import './../../styles/header/index.css';
import GithubIcon from './../../assets/icon/github.svg';

class Header extends React.PureComponent {
  render() {

    let {
      path
    } = this.props;

    return <Layout.Row align="left" className="r-ui-header">
      <Layout.Col flex="fixed" width={250}>
        <div className="logo" version="Ver: 1.0.0" library="React: 16.3.0-alpha.1">
          R-UI
        </div>
      </Layout.Col>
      <Layout.Col flex="growAndShrink">
        <Layout.Row align="right" className="navigate">
          <Layout.Col>
            <div className="item">
              <NavLink
                to="/"
                activeClassName="active"
                isActive={path === '/'}
              >
                概要
              </NavLink>
            </div>
          </Layout.Col>
          <Layout.Col>
            <div className="item">
              <NavLink
                to="/main"
                activeClassName="active"
              >
                文档
              </NavLink>
            </div>
          </Layout.Col>
          <Layout.Col>
            <div className="item">
              <NavLink
                to="/about"
                activeClassName="active"
              >
                关于
              </NavLink>
            </div>
          </Layout.Col>
          <Layout.Col flex="fixed" width={56}>
            <a href="https://github.com/ryouaki/R-UI">
              <img src={GithubIcon} alt="Github Icon" className="github-icon"/>
            </a>
          </Layout.Col>
        </Layout.Row>
      </Layout.Col>
    </Layout.Row>
  }
}

export default connect((store) => {
  console.log(store);
  return {
    path: store.route.location && store.route.location.path || ''
  }
}, {

})(Header);
