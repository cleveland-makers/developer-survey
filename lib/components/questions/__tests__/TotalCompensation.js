import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TotalCompensation from '../TotalCompensation';

configure({ adapter: new Adapter() });

const muiTheme = getMuiTheme();
const store = {
  saveCompensation: () => {},
  subscribe: () => {},
};
const shallowWithContext = node => shallow(node, {
  context: { muiTheme, store },
  childContextTypes: { muiTheme: PropTypes.object, store: PropTypes.object },
});

describe('TotalCompensation', () => {
  const testProps = {
    careerSalary: 0,
  };

  it('renders correctly', () => {
    const wrapper = shallowWithContext(<TotalCompensation
      {...testProps}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
