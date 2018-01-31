import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import StateApi from 'state-api';
import { StaticRouter } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from 'components/App';
import config from 'config';
import i18n from '../intl/i18n';
import {green100, green500, green700} from 'material-ui/styles/colors';

const serverRender = async (req) => {
  const muiTheme = getMuiTheme({
    palette: {
      primary1Color: green500,
      primary2Color: green700,
      primary3Color: green100,
    },
  }, {
    avatar: {
      borderColor: null,
    },
    userAgent: req.headers['user-agent'],
  });
  const resp = {}; // await axios.get(`http://${config.host}:${config.port}/data`);
  const data = {
    data: resp.data,
    i18n,
  };
  const store = new StateApi(data);
  const context = {};

  return {
    initialMarkup: ReactDOMServer.renderToString(
    <MuiThemeProvider muiTheme={muiTheme}>
      <StaticRouter location={req.url} context={context}>
        <App store={store} />
      </StaticRouter>
    </MuiThemeProvider>),
    initialData: data,
  };
};

export default serverRender;
