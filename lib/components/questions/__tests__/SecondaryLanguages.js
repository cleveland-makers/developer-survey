import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SecondaryLanguages from '../SecondaryLanguages';

configure({ adapter: new Adapter() });

const muiTheme = getMuiTheme();
const store = {
  saveHomeLanguages: () => {},
  subscribe: () => {},
};
const shallowWithContext = node => shallow(node, {
  context: { muiTheme, store },
  childContextTypes: { muiTheme: PropTypes.object, store: PropTypes.object },
});

describe('SecondaryLanguages', () => {
  const testProps = {
    languagePrimaryHomeLanguages: [''],
  };

  it('renders correctly', () => {
    const wrapper = shallowWithContext(<SecondaryLanguages
      {...testProps}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
