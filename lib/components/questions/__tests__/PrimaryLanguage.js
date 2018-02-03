import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PrimaryLanguage from '../PrimaryLanguage';

configure({ adapter: new Adapter() });

const muiTheme = getMuiTheme();
const store = {
  savePrimaryLanguage: () => {},
  subscribe: () => {},
};
const shallowWithContext = node => shallow(node, {
  context: { muiTheme, store },
  childContextTypes: { muiTheme: PropTypes.object, store: PropTypes.object },
});

describe('PrimaryLanguage', () => {
  const testProps = {
    languagePrimaryWorkLanguage: '',
  };

  it('renders correctly', () => {
    const wrapper = shallowWithContext(<PrimaryLanguage
      {...testProps}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
