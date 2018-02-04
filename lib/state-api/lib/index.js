import axios from 'axios';
import Fingerprint from 'fingerprintjs2';
import Q from 'q';

function grepSDP(sdp) {
  // c.f. http://tools.ietf.org/html/rfc4566#page-39
  // http://tools.ietf.org/html/rfc4566#section-5.13
  // http://tools.ietf.org/html/rfc5245#section-15.1
  return sdp.split('\r\n').map((line) => {
    if (line.indexOf('a=candidate') > -1) {
      const parts = line.split(' ');
      const addr = parts[4];
      const type = parts[7];
      if (type === 'host') {
        return addr;
      }
    } else if (line.indexOf('c=') > -1) {
      // http://tools.ietf.org/html/rfc4566#section-5.7
      const parts = line.split(' ');
      const addr = parts[2];
      return addr;
    }
    return '';
  });
}

function getLocalIp() {
  if (window && RTCPeerConnection) {
    // NOTE: window.RTCPeerConnection is "not a constructor" in FF22/23
    const RTCPeerConnection = window.webkitRTCPeerConnection || window.mozRTCPeerConnection;

    return new Promise((resolve, reject) => {
      const rtc = new RTCPeerConnection({ iceServers: [] });
      // FF [and now Chrome!] needs a channel/stream to proceed
      if (1 || window.mozRTCPeerConnection) {
        rtc.createDataChannel('', { reliable: false });
      }
      let ip;
      rtc.onicecandidate = (evt) => {
        // convert the candidate to SDP so we can run it through our general parser
        // see https://twitter.com/lancestout/status/525796175425720320 for details
        if (evt.candidate) {
          ip = grepSDP(`a=${evt.candidate.candidate}`);
          resolve(ip);
        } else {
          reject(new Error('Could not get local ip.'));
        }
      };
      rtc.createOffer((offerDesc) => {
        ip = grepSDP(offerDesc.sdp);
        rtc.setLocalDescription(offerDesc);
      }, () => {
        reject(new Error('Could not get local ip.'));
      });
    });
  }
  return Q.reject(new Error('Could not get local ip.'));
}

class StateApi {
  constructor({ data, i18n }) {
    this.authenticated = false;
    this.data = {
      fingerprint: '',
      ip: '',
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
      showValidation: false,
      surveyStep: 0,
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
      this.data.fingerprint = '';
    }
    try {
      getLocalIp().then((ip) => {
        this.mergeWithState({
          ip: ip[0],
        });
      });
    } catch (e) {
      this.data.ip = '0.0.0.0';
    }
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
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

  resetState = () => {
    const cleanState = {
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
      showValidation: false,
    };
    this.data = {
      ...this.data,
      ...cleanState,
    };
    this.notifySubscribers();
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
    this.mergeWithSurvey({
      careerWorkLifeBalance,
    });
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

  displayValidation = () => {
    this.mergeWithState({
      showValidation: true,
    });
  }

  nextStep = () => {
    this.mergeWithState({
      showValidation: false,
      surveyStep: this.data.surveyStep + 1,
    });
  }

  previousStep = () => {
    this.mergeWithState({
      surveyStep: this.data.surveyStep - 1,
    });
  }

  loadProps = async () => {
    return Q.fcall(() => {
      try {
        return new Fingerprint()
          .get((result) => {
            this.mergeWithState({
              fingerprint: result,
            });
          });
      } catch (e) {
        this.data.fingerprint = '';
      }
      return null;
    }).then(() => {
      return getLocalIp().then((ip) => {
        this.mergeWithState({
          ip: ip[0],
        });
      }).catch(() => {
        this.data.ip = '0.0.0.0';
      });
    });
  }

  disallow() {
    this.mergeWithState({
      surveyStep: -1,
    });
  }

  submitSurvey = async () => axios.post('/data/survey', {
    ip: this.data.ip,
    survey: this.data.survey,
    thumbprint: this.data.fingerprint,
  }).then(() => true).catch(() => false);

  checkSurveyState = () => axios.get(`/data/status?ip=${this.data.ip}&thumbprint=${this.data.fingerprint}`)
    .then(res => res.data)
    .catch(() => {
      return {
        allowed: false,
      };
    });
}

export default StateApi;
