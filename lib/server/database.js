const INSERT_SURVEY = `
INSERT INTO cleveland_developer_survey.survey(browser_thumbprint)
values($1) RETURNING *`;

const INSERT_SURVEY_RESPONSE = `
INSERT INTO cleveland_developer_survey.survey_response
(survey_id, survey_question_id, browser_thumbprint_id, survey_response)
VALUES($1, $2, $3, $4)`;

const INSERT_BROWSER_THUMBPRINT = `
INSERT INTO cleveland_developer_survey.browser_thumbprint(
  browser_thumbprint,
  external_ip,
  internal_ip
)
VALUES($1, $2, $3) RETURNING browser_thumbprint_id`;

const GET_THUMBPRINTS = `select *
from cleveland_developer_survey.browser_thumbprint
where browser_thumbprint = $1`;

const GET_THUMBPRINTS_BY_IPS = `select *
from cleveland_developer_survey.browser_thumbprint
where external_ip = $1 and internal_ip = $2`;

const GET_SURVEY_QUESTIONS = `
select *
from cleveland_developer_survey.survey_question`;

export const saveBrowser = async (db, externalIp, internalIp, thumbprint) => db
  .query(INSERT_BROWSER_THUMBPRINT, [
    thumbprint,
    externalIp,
    internalIp,
  ])
  .then(data => data.rows[0].browser_thumbprint_id);

export const saveSurvey = async (db, externalIp, internalIp, thumbprint, survey) => {
  const browserThumbprintId = await saveBrowser(db, externalIp, internalIp, thumbprint);
  const surveyId = await db.query(INSERT_SURVEY, [
    thumbprint,
  ]).then(data => data.rows[0].survey_id);
  const queryPromises = Object.keys(survey).map(key => db
    .query(INSERT_SURVEY_RESPONSE, [
      surveyId,
      key,
      browserThumbprintId,
      survey[key],
    ]));
  return Promise.all(queryPromises);
};

export const getThumbprintIp = async (db, externalIp, internalIp) => db
  .query(GET_THUMBPRINTS_BY_IPS, [
    externalIp,
    internalIp,
  ]);

export const getThumbprint = async (db, thumbprint) => db
  .query(GET_THUMBPRINTS, [
    thumbprint,
  ]);

export const getQuestions = async db => db
  .query(GET_SURVEY_QUESTIONS);
