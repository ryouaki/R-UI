import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Containers from './containers';

ReactDOM.render(
  <Router>
    <Containers />
  </Router>, 
  document.getElementById('root')
);
registerServiceWorker();
