import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Gender from '../Gender';

configure({ adapter: new Adapter() });

const muiTheme = getMuiTheme();
const store = {
  saveGender: () => {},
  subscribe: () => {},
};
const shallowWithContext = node => shallow(node, {
  context: { muiTheme, store },
  childContextTypes: { muiTheme: PropTypes.object, store: PropTypes.object },
});

describe('Gender', () => {
  const testProps = {
    personalGender: '',
  };

  it('renders correctly', () => {
    const wrapper = shallowWithContext(<Gender
      {...testProps}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
