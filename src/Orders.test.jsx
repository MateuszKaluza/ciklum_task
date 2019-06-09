import React from 'react';
import {shallow} from 'enzyme'
import {Orders} from './Orders';

describe('Orders', () => {

    it('should display 0 orders when no orders in props', () => {
        const wrapper = shallow(<Orders orders={[]}/>);

        expect(wrapper.exists('CardText')).toEqual(false);
    });

    it('should display orders when orders in props', () => {
        const wrapper = shallow(<Orders orders={[{}, {}]}/>);

        expect(wrapper.exists('CardText')).toEqual(true);
        expect(wrapper.find('CardText').length).toEqual(2);
    });
});