import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Ethnicity from '../Ethnicity';

configure({ adapter: new Adapter() });

const muiTheme = getMuiTheme();
const store = {
  saveEthnicity: () => {},
  subscribe: () => {},
};
const shallowWithContext = node => shallow(node, {
  context: { muiTheme, store },
  childContextTypes: { muiTheme: PropTypes.object, store: PropTypes.object },
});

describe('Ethnicity', () => {
  const testProps = {
    personalEthnicity: '',
  };

  it('renders correctly', () => {
    const wrapper = shallowWithContext(<Ethnicity
      {...testProps}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
