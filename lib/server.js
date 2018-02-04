import express from 'express';
import { Client } from 'pg';
import serverRender from 'renderers/server';
import Joi from 'joi';
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
  host: process.env.DATABASE_IP || 'localhost',
  password: process.env.DATABASE_PASSWORD || 'survey',
  port: 5432,
  user: process.env.DATABASE_USERNAME || 'developer',
};
const client = new Client(connection);

client.connect();
const questionCache = {};
getQuestions(client).then((data) => {
  data.rows.forEach((row) => {
    questionCache[row.survey_question_key] = row.survey_question_id;
  });
});

const schema = Joi.object().keys({
  careerDevelopmentJobCount: Joi.number().min(0).required(),
  careerSalary: Joi.number().min(0).required(),
  careerSatisfaction: Joi.string().required(),
  careerWorkLifeBalance: Joi.string().required(),
  developerCurrentRoles: Joi.array().items(Joi.string()).required(),
  developerHowLong: Joi.number().min(0).required(),
  languagePrimaryHomeLanguages: Joi.array().items(Joi.string()).required(),
  languagePrimaryWorkLanguage: Joi.string().required(),
  languageWhenDidYouLearnIt: Joi.number().min(0).required(),
  languageWhereDidYouLearnIt: Joi.array().items(Joi.string()).required(),
  languageWhyDoYouUseIt: Joi.array().items(Joi.string()).required(),
  officeEmployeeCount: Joi.string().required(),
  officeHoursPerWeek: Joi.number().min(0).required(),
  officeLocation: Joi.string().required(),
  personalEthnicity: Joi.string().required(),
  personalFavoriteClevelandActivity: Joi.string().required(),
  personalFavoriteSportsTeams: Joi.string().required(),
  personalGender: Joi.string().required(),
  personalHighestEducation: Joi.string().required(),
  personalWhyCleveland: Joi.array().items(Joi.string()).required(),
});

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(favicon(path.join(__dirname, '..', 'images', 'favicon.ico')));

app.set('view engine', 'ejs');

async function isAllowed(db, remoteIp, localIp, thumbprint) {
  const thumbprintsCursor = await getThumbprint(db, thumbprint);
  const ipsCursor = await getThumbprintIp(db, remoteIp, localIp);

  if (thumbprintsCursor.rowCount > 0) {
    return false;
  }
  return true;
}

app.post('/data/survey', async (req, res) => {
  console.log('POST /data/survey');
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

  const remoteIp = req.connection.remoteAddress;
  if (!isAllowed(client, remoteIp, req.body.ip, req.body.thumbprint)) {
    messages.push('You have already submitted the survey');
  }

  if (messages.length > 0) {
    res.status(500).json({
      messages,
    });
    return;
  }

  Joi.validate(req.body.survey, schema, async (err) => {
    if (err) {
      res.status(500).json({
        messages: [err],
      });
      return;
    }

    // Check if the have completed the survey.

    const correctedSurvey = {};
    Object.keys(req.body.survey).forEach((key) => {
      correctedSurvey[questionCache[key]] = JSON.stringify(req.body.survey[key]);
    });

    await saveSurvey(client, remoteIp, req.body.ip, req.body.thumbprint, correctedSurvey);
    res.status(200).json({
      status: 'success',
    });
  });
});

app.get('/data/status', async (req, res) => {
  console.log('GET /data/status');
  if (req.query
    && req.query.ip
    && req.query.ip.length > 0
    && req.query.thumbprint
    && req.query.thumbprint.length > 0
  ) {
    const remoteIp = req.connection.remoteAddress;
    const allowed = await isAllowed(client, remoteIp, req.query.ip, req.query.thumbprint);

    res.status(200).json({
      allowed,
    });
    return;
  }
  res.status(200).json({
    allowed: false,
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
  const googleAnalytics = (process.env.GOOGLE_ANALYTICS) ? {
    googleAnalytics: { trackingId: process.env.GOOGLE_ANALYTICS },
  } : {
    googleAnalytics: null,
  };
  const initialContent = await serverRender(req);
  res.render('index', {
    ...initialContent,
    ...googleAnalytics,
  });
});

app.listen(config.port, () => {
  console.info(`Running on ${config.port}...`);
});
