import React from 'react';
import {shallow} from 'enzyme'
import {SideSelect} from './SideSelect';

describe('SideSelect', () => {

    it('should have two inputs', () => {
        const wrapper = shallow(<SideSelect side="BUY"/>);

        expect(wrapper.find('CustomInput').length).toEqual(2);
    });

    it('should check market', () => {
        const wrapper = shallow(<SideSelect side="BUY"/>);

        expect(wrapper.find('CustomInput').first().prop('checked')).toEqual(true);
        expect(wrapper.find('CustomInput').last().prop('checked')).toEqual(false);
    });

    it('should check limit', () => {
        const wrapper = shallow(<SideSelect side="SELL"/>);

        expect(wrapper.find('CustomInput').first().prop('checked')).toEqual(false);
        expect(wrapper.find('CustomInput').last().prop('checked')).toEqual(true);
    });
});