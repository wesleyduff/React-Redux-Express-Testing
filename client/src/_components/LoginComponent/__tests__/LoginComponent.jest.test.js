import React from 'react';
import { shallow } from 'enzyme';
import LoginComponent from '../LoginComponent';

describe('should render', () => {
    it('should have a prop called foo and should equal 1', () => {
        const props = {
            foo: 1,
            bar: 'test'
        }
        const wrapper = shallow(<LoginComponent {...props} />);
        expect(wrapper.instance().props.foo).toEqual(1)
    })
})