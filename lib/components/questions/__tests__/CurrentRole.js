import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CodingInstitutions from '../CodingInstitutions';

configure({ adapter: new Adapter() });

const muiTheme = getMuiTheme();
const store = {
  saveWhereLearned: () => {},
  subscribe: () => {},
};
const shallowWithContext = node => shallow(node, {
  context: { muiTheme, store },
  childContextTypes: { muiTheme: PropTypes.object, store: PropTypes.object },
});

describe('CodingInstitutions', () => {
  const testProps = {
    languageWhereDidYouLearnIt: [''],
  };

  it('renders correctly', () => {
    const wrapper = shallowWithContext(<CodingInstitutions
      {...testProps}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
