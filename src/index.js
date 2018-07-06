import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Containers from './containers';
import storeCreate from './store';

import 'github-markdown-css/github-markdown.css';

let opts = storeCreate();

ReactDOM.render(
  <Provider store={opts.store}> 
    <Router>
      <Containers />
    </Router> 
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
