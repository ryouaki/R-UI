import React from 'react';
import Layout from './../../components/layout';

import './../../styles/header/index.css';

export default class Header extends React.PureComponent {
  render() {
    return <Layout.Row align="left">
      <Layout.Col>
        1
      </Layout.Col>
      <Layout.Col>
        1
      </Layout.Col>
    </Layout.Row>
  }
}
