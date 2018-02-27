import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import Containers from './containers';
import storeCreate from './store';

import 'github-markdown-css/github-markdown.css';

let store = storeCreate();

ReactDOM.render(
  <Provider store={store}> 
    <Router>
      <Containers />
    </Router> 
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
