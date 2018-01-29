class StateApi {
  constructor({ data, i18n }) {
    this.authenticated = false;
    this.data = {
      i18n,
      survey: {
        careerDevelopmentJobCount: '',
        careerSalary: '',
        careerSatisfaction: '',
        careerWorkLifeBalance: '',
        developerCurrentRoles: '',
        developerHowLong: '',
        languagePrimaryHomeLanguages: '',
        languagePrimaryWorkLanguage: '',
        languageWhenDidYouLearnIt: '',
        languageWhereDidYouLearnIt: '',
        languageWhyDoYouUseIt: '',
        officeEmployeeCount: '',
        officeHoursPerWeek: '',
        officeLocation: '',
        personalEthnicity: '',
        personalFavoriteClevelandActivity: '',
        personalFavoriteSportsTeams: '',
        personalGender: '',
        personalHighestEducation: '',
        personalWhyCleveland: '',
      },
    };
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
    this.lastSubscriptionId++;
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

  saveWorkLifeBalalnce(careerWorkLifeBalance) {
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
}

export default StateApi;
