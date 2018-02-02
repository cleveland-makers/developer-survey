import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReasonsForStayingInCleveland from '../ReasonsForStayingInCleveland';

configure({ adapter: new Adapter() });

const muiTheme = getMuiTheme();
const store = {
  saveWhyCleveland: () => {},
  subscribe: () => {},
};
const shallowWithContext = node => shallow(node, {
  context: { muiTheme, store },
  childContextTypes: { muiTheme: PropTypes.object, store: PropTypes.object },
});

describe('ReasonsForStayingInCleveland', () => {
  const testProps = {
    personalWhyCleveland: [''],
  };

  it('renders correctly', () => {
    const wrapper = shallowWithContext(<ReasonsForStayingInCleveland
      {...testProps}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
