import React from 'react';
import Flow from '../Flow';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Flow', () => {

  const testProps = {
    flow: {
      title: "title",
      data: [{
        sections: [],
      }],
    },
  };

  it('renders correctly', () => {

    const wrapper = shallow(
      <Flow
        {...testProps}
      />
    );

    expect(wrapper.find('SectionList').length).toBe(1);
    expect(wrapper).toMatchSnapshot();

  });

});
