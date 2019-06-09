import React from 'react';
import {shallow} from 'enzyme'
import sinon from 'sinon';
import {SubmitButton} from './SubmitButton';
import localStorage from 'localStorage';

describe('SubmitButton', () => {

    it('should be disabled when order type is limit and limit value is 0', () => {
        const order = {
            orderType: 'LIMIT',
            limit: 0
        };

        const wrapper = shallow(<SubmitButton order={order}/>);

        expect(wrapper.find('Button').prop('disabled')).toEqual(true);
    });

    it('should be enabled when order type is limit and limit value is greater than 0', () => {
        const order = {
            orderType: 'LIMIT',
            limit: 23
        };

        const wrapper = shallow(<SubmitButton order={order}/>);

        expect(wrapper.find('Button').prop('disabled')).toEqual(false);
    });

    it('should be enabled when order type is market', () => {
        const order = {
            orderType: 'MARKET'
        };

        const wrapper = shallow(<SubmitButton order={order}/>);

        expect(wrapper.find('Button').prop('disabled')).toEqual(false);
    });

    it('should prevent default action on click', () => {
        const order = {};
        const addOrderSpy = sinon.stub();
        const mockEvent = {
            preventDefault: sinon.spy()
        };

        const wrapper = shallow(<SubmitButton order={order} addOrder={addOrderSpy}/>);
        wrapper.find('Button').simulate('click', mockEvent);

        expect(mockEvent.preventDefault.calledOnce).toEqual(true);
    });

    it('should called redux action on click', () => {
        const order = {};
        const addOrderSpy = sinon.spy();
        const mockEvent = {
            preventDefault() {
            }
        };
        const wrapper = shallow(<SubmitButton order={order} addOrder={addOrderSpy}/>);
        wrapper.find('Button').simulate('click', mockEvent);

        expect(addOrderSpy.calledOnce).toEqual(true);
        expect(addOrderSpy.calledWith(order)).toEqual(true);
    });

    it('should create localStorage entry', () => {
        localStorage.clear();

        const mockEvent = {
            preventDefault() {
            }
        };
        const addOrderSpy = sinon.stub();
        const wrapper = shallow(<SubmitButton order={{}} addOrder={addOrderSpy}/>);
        wrapper.find('Button').simulate('click', mockEvent);

        const orders = JSON.parse(localStorage.getItem('orders'));
        expect(orders.length).toEqual(1);
    });

    it('should add order to localStorage', () => {
        localStorage.clear();
        localStorage.setItem('orders', JSON.stringify([{}]));

        const mockEvent = {
            preventDefault() {
            }
        };
        const addOrderSpy = sinon.stub();
        const wrapper = shallow(<SubmitButton order={{}} addOrder={addOrderSpy}/>);
        wrapper.find('Button').simulate('click', mockEvent);

        const orders = JSON.parse(localStorage.getItem('orders'));
        expect(orders.length).toEqual(2);
    });
});