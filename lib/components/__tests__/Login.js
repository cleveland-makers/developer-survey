import React from 'react';
import Login from '../Login';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Login', () => {

  it('renders correctly', () => {

    const wrapper = shallow(
      <Login />
    );

    expect(wrapper.find('Link').length).toBe(2);
    expect(wrapper).toMatchSnapshot();

  });

});
