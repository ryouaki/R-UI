import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Bundle from './../components/Bundle';
import { getPublicUrl } from './../common';

import Footer from './Footer';

import './../styles/index.css';

export default class Container extends React.PureComponent {
  render() {
    return <div className="r-ui container">
      <Switch>
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
      <Footer/>
    </div>
  }
}
