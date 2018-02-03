import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import YearsOfExperience from '../YearsOfExperience';

configure({ adapter: new Adapter() });

const muiTheme = getMuiTheme();
const store = {
  saveHowLong: () => {},
  subscribe: () => {},
};
const shallowWithContext = node => shallow(node, {
  context: { muiTheme, store },
  childContextTypes: { muiTheme: PropTypes.object, store: PropTypes.object },
});

describe('YearsOfExperience', () => {
  const testProps = {
    developerHowLong: 0,
  };

  it('renders correctly', () => {
    const wrapper = shallowWithContext(<YearsOfExperience
      {...testProps}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
