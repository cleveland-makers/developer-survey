import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Survey from '../Survey';

configure({ adapter: new Adapter() });

describe('Flow', () => {
  const testProps = {
    surveyLength: 0,
    surveyStep: 0,
  };

  it('renders TellUsAboutYourCurrentRole correctly', () => {
    const wrapper = shallow(<Survey
      {...testProps}
    />);

    expect(wrapper.find('SurveyProgress').length).toBe(1);
    expect(wrapper.find('TellUsAboutYourCurrentRoleContainer').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
