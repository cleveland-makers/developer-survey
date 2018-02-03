import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FavoriteSportsTeam from '../FavoriteSportsTeam';

configure({ adapter: new Adapter() });

const muiTheme = getMuiTheme();
const store = {
  saveSportsTeam: () => {},
  subscribe: () => {},
};
const shallowWithContext = node => shallow(node, {
  context: { muiTheme, store },
  childContextTypes: { muiTheme: PropTypes.object, store: PropTypes.object },
});

describe('FavoriteSportsTeam', () => {
  const testProps = {
    personalFavoriteSportsTeams: '',
  };

  it('renders correctly', () => {
    const wrapper = shallowWithContext(<FavoriteSportsTeam
      {...testProps}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
