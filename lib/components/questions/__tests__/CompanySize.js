import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CompanySize from '../CompanySize';

configure({ adapter: new Adapter() });

const muiTheme = getMuiTheme();
const store = {
  saveCompanySize: () => {},
  subscribe: () => {},
};
const shallowWithContext = node => shallow(node, {
  context: { muiTheme, store },
  childContextTypes: { muiTheme: PropTypes.object, store: PropTypes.object },
});

describe('CompanySize', () => {
  const testProps = {
    officeEmployeeCount: '',
  };

  it('renders correctly', () => {
    const wrapper = shallowWithContext(<CompanySize
      {...testProps}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
