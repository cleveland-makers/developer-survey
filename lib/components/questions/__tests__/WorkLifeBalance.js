import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WorkLifeBalance from '../WorkLifeBalance';

configure({ adapter: new Adapter() });

const muiTheme = getMuiTheme();
const store = {
  saveWorkLifeBalance: () => {},
  subscribe: () => {},
};
const shallowWithContext = node => shallow(node, {
  context: { muiTheme, store },
  childContextTypes: { muiTheme: PropTypes.object, store: PropTypes.object },
});

describe('WorkLifeBalance', () => {
  const testProps = {
    careerWorkLifeBalance: '',
  };

  it('renders correctly', () => {
    const wrapper = shallowWithContext(<WorkLifeBalance
      {...testProps}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
