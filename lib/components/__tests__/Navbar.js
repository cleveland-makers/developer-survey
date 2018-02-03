import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navbar from '../Navbar';

configure({ adapter: new Adapter() });

describe('Navbar', () => {
  const testProps = {
    history: {
      push: () => {},
    },
    i18n: {
      header: 'Header',
    },
  };

  it('renders correctly', () => {
    const wrapper = shallow(<Navbar
      {...testProps}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
