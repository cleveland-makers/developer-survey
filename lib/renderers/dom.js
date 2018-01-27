import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import StateApi from 'state-api';
import App from 'components/App';

const store = new StateApi(window.initialData);

ReactDOM.hydrate(
  <MuiThemeProvider>
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root'),
);
