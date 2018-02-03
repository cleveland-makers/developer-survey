import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NumCompaniesWorkedFor from '../NumCompaniesWorkedFor';

configure({ adapter: new Adapter() });

const muiTheme = getMuiTheme();
const store = {
  saveNumberOfJobs: () => {},
  subscribe: () => {},
};
const shallowWithContext = node => shallow(node, {
  context: { muiTheme, store },
  childContextTypes: { muiTheme: PropTypes.object, store: PropTypes.object },
});

describe('NumCompaniesWorkedFor', () => {
  const testProps = {
    careerDevelopmentJobCount: 0,
  };

  it('renders correctly', () => {
    const wrapper = shallowWithContext(<NumCompaniesWorkedFor
      {...testProps}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
