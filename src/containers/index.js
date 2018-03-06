import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Bundle from './../components/Bundle';
import { getPublicUrl } from './../common';

import Layout from './../components/Layout';

import Header from './Header';
import Footer from './Footer';

import './../styles/index.css';

export default class Container extends React.Component {
  render() {
    return <Layout.Row direction="col" className="container">
      <Layout.Col flex="fixed">
        <Header key="header"/>
      </Layout.Col>
      <Layout.Col flex="growAndShrink">
        <Switch key="main">
          <Route exact path={ getPublicUrl('/') } component={ (props) => {
                return <Bundle load={ () => import('./Home') }>
                  {Home => <Home {...props} />}
                </Bundle>
              } 
            }/>
          <Route path={ getPublicUrl('/main') } component={ (props) => {
                return <Bundle load={ () => import('./Main') }>
                  {Articles => <Articles {...props} />}
                </Bundle>
              } 
            }/>
        </Switch>
      </Layout.Col>
      <Layout.Col flex="fixed">
        <Footer key="footer"/>
      </Layout.Col>
    </Layout.Row>
  }
}
