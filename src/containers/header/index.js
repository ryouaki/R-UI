import React from 'react';
import Layout from './../../components/Layout';

import './../../styles/header/index.css';
import GithubIcon from './../../assets/icon/github.svg';

export default class Header extends React.PureComponent {
  render() {
    return <Layout.Row align="left" className="r-ui-header">
      <Layout.Col flex="fixed" width={250}>
        <div className="logo" version="Ver: 1.0.0" library="React: 16.3.0-alpha.1">
          R-UI
        </div>
      </Layout.Col>
      <Layout.Col flex="growAndShrink">
        <Layout.Row align="right" className="navigate">
          <Layout.Col>
            <div className="item active">
              概要
            </div>
          </Layout.Col>
          <Layout.Col>
            <div className="item">
              教程
            </div>
          </Layout.Col>
          <Layout.Col>
            <div className="item">
              关于
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
