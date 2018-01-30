import express from 'express';
import pgpraw from 'pg-promise';
import serverRender from 'renderers/server';
import favicon from 'serve-favicon';
import path from 'path';
import config from './config';
import { data } from './seedData.json';

// Connect Database.
const pgp = pgpraw();

const connection = {
  database: 'postgres',
  host: 'localhost',
  password: 'survey',
  port: 5432,
  user: 'developer',
};
const db = pgp(connection);

// Check that the database is running.
db.query('select * FROM cleveland_developer_survey.survey_response limit 1')
  .then(() => {
    console.log('Connected to the database.');
  })
  .catch((err) => {
    console.log('Could not connect to database, functionality will be limited.');
    console.log(err);
  });

const app = express();

app.use(express.static('public'));
app.use(favicon(path.join(__dirname, '..', 'images', 'favicon.ico')));

app.set('view engine', 'ejs');

app.post('/data/survey-response', (req, res) => {
  res.status(200).json({
    status: 'success',
  });
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.get('*', async (req, res) => {
  const initialContent = await serverRender(req);
  res.render('index', { ...initialContent });
});

app.listen(config.port, () => {
  console.info(`Running on ${config.port}...`);
});
