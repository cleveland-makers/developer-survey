import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import StateApi from 'state-api';
import { StaticRouter } from 'react-router-dom';

import App from 'components/App';
import config from 'config';
import i18n from '../intl/i18n'

const serverRender = async (req) => {
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const data = {
    data: resp.data,
    i18n,
  };
  const store = new StateApi(data);
  const context = {};

  return {
    initialMarkup: ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App store={store} />
      </StaticRouter>
    ),
    initialData: data,
  };
};

export default serverRender;
