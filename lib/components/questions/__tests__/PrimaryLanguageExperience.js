import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PrimaryLanguageExperience from '../PrimaryLanguageExperience';

configure({ adapter: new Adapter() });

const muiTheme = getMuiTheme();
const store = {
  saveWhenLearned: () => {},
  subscribe: () => {},
};
const shallowWithContext = node => shallow(node, {
  context: { muiTheme, store },
  childContextTypes: { muiTheme: PropTypes.object, store: PropTypes.object },
});

describe('PrimaryLanguageExperience', () => {
  const testProps = {
    languageWhenDidYouLearnIt: 0,
  };

  it('renders correctly', () => {
    const wrapper = shallowWithContext(<PrimaryLanguageExperience
      {...testProps}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
