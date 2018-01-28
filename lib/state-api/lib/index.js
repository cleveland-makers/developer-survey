class StateApi {
  constructor({ data, i18n }) {
    this.authenticated = false;
    this.data = {
      i18n,
      surveyResponses: {
        developerCurrentRoles: '',
        developerHowLong: '',
        languagePrimaryWorkLanguage: '',
        languagePrimaryHomeLanguages: '',
        languageWhyDoYouUseIt: '',
        languageWhenDidYouLearnIt: '',
        languageWhereDidYouLearnIt: '',
        officeHoursPerWeek: '',
        officeLocation: '',
        officeEmployeeCount: '',
        careerSalary: '',
        careerDevelopmentJobCount: '',
        careerSatisfaction: '',
        careerWorkLifeBalance: '',
        personalWhyCleveland: '',
        personalFavoriteSportsTeams: '',
        personalFavoriteClevelandActivity: '',
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

  isAuthenticated = () => this.authenticated

  authenticate = async (username, password) => await Q.fcall(() => true)

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

  saveRoles(currentRoles) {
    this.mergeWithState({
      currentRoles,
    });
  }
}

export default StateApi;
