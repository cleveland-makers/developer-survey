import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LanguageUses from '../LanguageUses';

configure({ adapter: new Adapter() });

const muiTheme = getMuiTheme();
const store = {
  saveLanguageUses: () => {},
  subscribe: () => {},
};
const shallowWithContext = node => shallow(node, {
  context: { muiTheme, store },
  childContextTypes: { muiTheme: PropTypes.object, store: PropTypes.object },
});

describe('LanguageUses', () => {
  const testProps = {
    languageWhyDoYouUseIt: [''],
  };

  it('renders correctly', () => {
    const wrapper = shallowWithContext(<LanguageUses
      {...testProps}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
