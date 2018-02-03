import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Faq from '../Faq';

configure({ adapter: new Adapter() });

describe('Faq', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Faq />);

    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
