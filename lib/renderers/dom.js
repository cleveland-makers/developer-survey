import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import StateApi from 'state-api';
import App from 'components/App';

const store = new StateApi(window.initialData);

ReactDOM.hydrate(
  <BrowserRouter>
    <App store={store} />
  </BrowserRouter>,
  document.getElementById('root')
);
