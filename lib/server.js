import express from 'express';
import { Client } from 'pg';
import serverRender from 'renderers/server';
import compression from 'compression';
import favicon from 'serve-favicon';
import path from 'path';
import bodyParser from 'body-parser';
import {
  getQuestions,
  getThumbprint,
  getThumbprintIp,
  saveSurvey,
} from './server/database';
import config from './config';

const connection = {
  database: 'postgres',
  host: 'localhost',
  password: 'survey',
  port: 5432,
  user: 'developer',
};
const client = new Client(connection);

client.connect();
const questionCache = {};
getQuestions(client).then((data) => {
  data.rows.forEach((row) => {
    questionCache[row.survey_question_key] = row.survey_question_id;
  });
  console.log(questionCache);
});

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(favicon(path.join(__dirname, '..', 'images', 'favicon.ico')));

app.set('view engine', 'ejs');

app.post('/data/survey', async (req, res) => {
  const messages = [];
  if (!req.body) {
    messages.push('No post body');
  }

  if (!req.body.thumbprint || req.body.thumbprint.length === 0) {
    messages.push('No thumbprint');
  }

  if (!req.body.ip || req.body.ip.length === 0) {
    messages.push('No ip');
  }

  if (!req.body.survey || req.body.survey.length === 0) {
    messages.push('No survey');
  } else {
    if (Object.keys(req.body.survey).length !== Object.keys(questionCache).length) {
      messages.push('Invalid survey response');
    }

    Object.keys(req.body.survey).forEach((key) => {
      if (!questionCache[key]) {
        messages.push(`${key} does not exist`);
      }
    });
  }

  if (messages.length > 0) {
    res.status(500).json({
      messages,
    });
    return;
  }

  // if survey length ===
  // if all keys are in cahce.

  const correctedSurvey = {};
  Object.keys(req.body.survey).forEach((key) => {
    correctedSurvey[questionCache[key]] = JSON.stringify(req.body.survey[key]);
  });
  const remoteIp = req.connection.remoteAddress;
  await saveSurvey(client, remoteIp, req.body.ip, req.body.thumbprint, correctedSurvey);
  res.status(200).json({
    status: 'success',
  });
});

app.get('/data/thumbprint', async (req, res) => {
  if (req.query
    && req.query.ip
    && req.query.ip.length > 0
    && req.query.thumbprint
    && req.query.thumbprint.length > 0
  ) {
    const remoteIp = req.connection.remoteAddress;
    const thumbprints = await getThumbprint(client, req.query.thumbprint);
    const ips = await getThumbprintIp(client, remoteIp, req.query.ip);

    // TODO: Add logic.

    res.status(200).json({
      allowed: true,
    });
    return;
  }
  res.status(500).json({
    message: 'There are no params',
  });
});

if (process.env.node_env === 'production') {
  app.get('*.js', (req, res, next) => {
    req.url += '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
  });
}

app.get('*', async (req, res) => {
  const initialContent = await serverRender(req);
  res.render('index', { ...initialContent });
});

app.listen(config.port, () => {
  console.info(`Running on ${config.port}...`);
});
