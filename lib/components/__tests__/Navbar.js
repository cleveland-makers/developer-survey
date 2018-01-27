import React from 'react';
import Navbar from '../Navbar';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Navbar', () => {

  const testProps = {
    i18n: {
      header: "Header"
    },
  };

  it('renders correctly', () => {

    const wrapper = shallow(
      <Navbar
        {...testProps}
      />
    );

    expect(wrapper.find('NavbarHeader').length).toBe(1);
    expect(wrapper).toMatchSnapshot();

  });

});
