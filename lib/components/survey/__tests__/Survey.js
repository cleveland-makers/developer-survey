import React from 'react';
import PropTypes from 'prop-types';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Survey from '../Survey';

configure({ adapter: new Adapter() });

const store = {
  checkSurveyState: () => {},
  disallow: () => {},
  loadProps: () => {},
  resetState: () => {},
  subscribe: () => {},
  submitSurvey: () => {},
};

describe('Survey', () => {
  const testProps = {
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
      personalEthnicity: [],
      personalFavoriteClevelandActivity: '',
      personalFavoriteSportsTeams: '',
      personalGender: '',
      personalHighestEducation: '',
      personalWhyCleveland: [],
    },
    surveyStep: 1,
    surveyLength: 5,
  };

  it('renders correctly', () => {
    const wrapper = shallow(<Survey
      {...testProps}
    />, {
      context: { store },
      childContextTypes: { store: PropTypes.object },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
