import React from 'react';
import {shallow} from 'enzyme'
import {PairSelect} from './PairSelect';
import sinon from 'sinon';
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios';

import * as URLS from './url';

describe('PairSelect', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<PairSelect selectPair={() => {
        }} />);
    });

    afterEach(() => {
        wrapper = null;
    });

    it('should dispalay spinner during loading', () => {
        wrapper.setState({isLoading: true});

        expect(wrapper.find('Spinner').length).toEqual(1);
    });

    it('should display input select when loading finished', () => {
        wrapper.setState({isLoading: false});
        const input = wrapper.find('Input');

        expect(input.length).toEqual(1);
        expect(input.prop('type')).toEqual('select');
    });

    it('should display enabled input select when loading succeeded', () => {
        wrapper.setState({isLoading: false, isValid: true});
        const input = wrapper.find('Input');

        expect(input.prop('disabled')).toEqual(false);
        expect(input.prop('invalid')).toEqual(false);
        expect(wrapper.find('FormFeedback').prop('valid')).toEqual(true);
    });

    it('should display disabled input select and info when loading failed', () => {
        wrapper.setState({isLoading: false, isValid: false});
        const input = wrapper.find('Input');

        expect(input.prop('disabled')).toEqual(true);
        expect(input.prop('invalid')).toEqual(true);
        expect(wrapper.find('FormFeedback').prop('valid')).toEqual(false);
    });

    it('should handle option select', () => {
        wrapper.setState({isLoading: false, isValid: false});
        const input = wrapper.find('Input');
        const onChangeSpy = sinon.spy();
        const fakeEvent = {target: {value: 'xyz'}};
        wrapper.setProps({selectPair: onChangeSpy});

        input.simulate('change', fakeEvent);
        expect(onChangeSpy.calledOnceWith(fakeEvent)).toEqual(false);
    });

    it('should fetch data', async (done) => {
        const mockPairs = [{ pair: 'abc' }, { pair: 'xyz' }];
        const mock = new MockAdapter(axios);
        mock.onGet(URLS.SYMBOL_DETAILS)
            .reply(200, mockPairs);

        await wrapper.instance()
            .componentDidMount();
        expect(wrapper.state('pairs')).toEqual(['abc', 'xyz']);
        done();
    });
});