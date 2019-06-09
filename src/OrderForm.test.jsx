import React from 'react';
import { shallow } from 'enzyme'
import OrderForm from './OrderForm';

describe('OrderForm', () => {
    
    it('should contains six form', () => {
        const wrapper = shallow(<OrderForm/>);
        
        expect(wrapper.children().length).toEqual(6)
    });
});