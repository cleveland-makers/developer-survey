import Fingerprint from 'fingerprintjs2';

class StateApi {
  constructor({ data, i18n }) {
    this.authenticated = false;
    this.data = {
      fingerprint: '',
      i18n,
      survey: {
        careerDevelopmentJobCount: 0,
        careerSalary: 0,
        careerSatisfaction: '',
        careerWorkLifeBalance: '',
        developerCurrentRoles: [],
        developerHowLong: 0,
        languagePrimaryHomeLanguages: [],
        languagePrimaryWorkLanguage: '',
        languageWhenDidYouLearnIt: 0,
        languageWhereDidYouLearnIt: [],
        languageWhyDoYouUseIt: [],
        officeEmployeeCount: '',
        officeHoursPerWeek: 0,
        officeLocation: '',
        personalEthnicity: '',
        personalFavoriteClevelandActivity: '',
        personalFavoriteSportsTeams: '',
        personalGender: '',
        personalHighestEducation: '',
        personalWhyCleveland: [],
      },
      surveyStep: 1,
      surveyLength: 5,
    };
    try {
      new Fingerprint()
        .get((result) => {
          this.mergeWithState({
            fingerprint: result,
          });
        });
    } catch (e) {
      this.data.fingerprint = 'error';
    }
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  getState = () => this.data;

  subscribe = (cb) => {
    this.lastSubscriptionId += 1;
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  };

  unsubscribe = (subscriptionId) => {
    delete this.subscriptions[subscriptionId];
  };

  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach(cb => cb());
  };

  mergeWithState = (stateChange) => {
    this.data = {
      ...this.data,
      ...stateChange,
    };
    this.notifySubscribers();
  };

  mergeWithSurvey = (surveyResponse) => {
    this.mergeWithState({
      survey: {
        ...this.data.survey,
        ...surveyResponse,
      },
    });
  };

  setSearchTerm = (searchTerm) => {
    this.mergeWithState({
      searchTerm,
    });
  };

  saveAverageHoursPerWeek(hoursPerWeek) {
    this.mergeWithState({
      hoursPerWeek,
    });
  }

  saveRoles(developerCurrentRoles) {
    this.mergeWithSurvey({
      developerCurrentRoles,
    });
  }

  saveHowLong(developerHowLong) {
    this.mergeWithSurvey({
      developerHowLong,
    });
  }

  saveWhenLearned(languageWhenDidYouLearnIt) {
    this.mergeWithSurvey({
      languageWhenDidYouLearnIt,
    });
  }

  saveWorkLocation(officeLocation) {
    this.mergeWithSurvey({
      officeLocation,
    });
  }

  saveWorkLifeBalance(careerWorkLifeBalance) {
    this.mergeWithSurvey([
      careerWorkLifeBalance,
    ]);
  }

  saveCompensation(careerSalary) {
    this.mergeWithSurvey({
      careerSalary,
    });
  }

  saveHomeLanguages(languagePrimaryHomeLanguages) {
    this.mergeWithSurvey({
      languagePrimaryHomeLanguages,
    });
  }

  saveWhyCleveland(personalWhyCleveland) {
    this.mergeWithSurvey({
      personalWhyCleveland,
    });
  }

  savePrimaryLanguage(languagePrimaryWorkLanguage) {
    this.mergeWithSurvey({
      languagePrimaryWorkLanguage,
    });
  }

  saveNumberOfJobs(careerDevelopmentJobCount) {
    this.mergeWithSurvey({
      careerDevelopmentJobCount,
    });
  }

  saveLanguageUses(languageWhyDoYouUseIt) {
    this.mergeWithSurvey({
      languageWhyDoYouUseIt,
    });
  }

  saveJobSatisfaction(careerSatisfaction) {
    this.mergeWithSurvey({
      careerSatisfaction,
    });
  }

  saveHighestEducation(personalHighestEducation) {
    this.mergeWithSurvey({
      personalHighestEducation,
    });
  }

  saveGender(personalGender) {
    this.mergeWithSurvey({
      personalGender,
    });
  }

  saveSportsTeam(personalFavoriteSportsTeams) {
    this.mergeWithSurvey({
      personalFavoriteSportsTeams,
    });
  }

  saveClevelandActivity(personalFavoriteClevelandActivity) {
    this.mergeWithSurvey({
      personalFavoriteClevelandActivity,
    });
  }

  saveEthnicity(personalEthnicity) {
    this.mergeWithSurvey({
      personalEthnicity,
    });
  }

  saveCompanySize(officeEmployeeCount) {
    this.mergeWithSurvey({
      officeEmployeeCount,
    });
  }

  saveWhereLearned(languageWhereDidYouLearnIt) {
    this.mergeWithSurvey({
      languageWhereDidYouLearnIt,
    });
  }

  saveHoursPerWeek(officeHoursPerWeek) {
    this.mergeWithSurvey({
      officeHoursPerWeek,
    });
  }

  nextStep() {
    this.mergeWithState({
      surveyStep: this.data.surveyStep + 1,
    });
  }

  previousStep() {
    this.mergeWithState({
      surveyStep: this.data.surveyStep - 1,
    });
  }

  submitSurvey() {

  }
}

export default StateApi;
