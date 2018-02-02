import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Education from '../Education';

configure({ adapter: new Adapter() });

const muiTheme = getMuiTheme();
const store = {
  saveHighestEducation: () => {},
  subscribe: () => {},
};
const shallowWithContext = node => shallow(node, {
  context: { muiTheme, store },
  childContextTypes: { muiTheme: PropTypes.object, store: PropTypes.object },
});

describe('Education', () => {
  const testProps = {
    personalHighestEducation: '',
  };

  it('renders correctly', () => {
    const wrapper = shallowWithContext(<Education
      {...testProps}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
