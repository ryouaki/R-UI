import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';

import Containers from './containers';
import storeCreate from './store';

import 'github-markdown-css/github-markdown.css';

let opts = storeCreate();

ReactDOM.render(
  <Provider store={opts.store}> 
    <ConnectedRouter history={opts.history}>
      <Containers />
    </ConnectedRouter> 
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
