import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Survey from '../Survey';

configure({ adapter: new Adapter() });

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

  it('renders correctly', () => {
    const wrapper = shallow(<Survey
      {...testProps}
    />);

    expect(wrapper.find('SurveyProgress').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
