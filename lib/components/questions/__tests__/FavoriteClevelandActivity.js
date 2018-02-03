import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FavoriteClevelandActivity from '../FavoriteClevelandActivity';

configure({ adapter: new Adapter() });

const muiTheme = getMuiTheme();
const store = {
  saveClevelandActivity: () => {},
  subscribe: () => {},
};
const shallowWithContext = node => shallow(node, {
  context: { muiTheme, store },
  childContextTypes: { muiTheme: PropTypes.object, store: PropTypes.object },
});

describe('FavoriteClevelandActivity', () => {
  const testProps = {
    personalFavoriteClevelandActivity: '',
  };

  it('renders correctly', () => {
    const wrapper = shallowWithContext(<FavoriteClevelandActivity
      {...testProps}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
