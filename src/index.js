import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Button from './components/button';

import './styles/index.css';

ReactDOM.render(
  <div className="kr-react-ui">
    <Button></Button>
  </div>, 
  document.getElementById('root')
);
registerServiceWorker();
