import reducer from './reducer';
import * as actions from './actionTypes';

describe('reducer', () => {
    let initialState = {};

    beforeEach(() => {
        initialState = {
            pair: '',
            side: 'BUY',
            orderType: 'MARKET',
            limit: 0,
            quantity: 0
        };
    });

    afterEach(() => {
        initialState = null;
    });

    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle select pair', () => {
        const expectedState = {
            pair: 'xyz',
            side: 'BUY',
            orderType: 'MARKET',
            limit: 0,
            quantity: 0
        };

        expect(reducer(initialState, { type: actions.SELECT_PAIR, pair: 'xyz' })).toEqual(expectedState)
    });

    it('should handle change pair', () => {
        const expectedState = {
            pair: '',
            side: 'SELL',
            orderType: 'MARKET',
            limit: 0,
            quantity: 0
        };

        expect(reducer(initialState, { type: actions.CHANGE_SIDE, side: 'SELL' })).toEqual(expectedState)
    });

    it('should handle change order type', () => {
        const expectedState = {
            pair: '',
            side: 'BUY',
            orderType: 'LIMIT',
            limit: 0,
            quantity: 0
        };

        expect(reducer(initialState, { type: actions.CHANGE_ORDER_TYPE, orderType: 'LIMIT' })).toEqual(expectedState)
    });

    it('should handle change limit', () => {
        const expectedState = {
            pair: '',
            side: 'BUY',
            orderType: 'MARKET',
            limit: 21,
            quantity: 0
        };

        expect(reducer(initialState, { type: actions.CHANGE_LIMIT, limit: 21 })).toEqual(expectedState)
    });

    it('should handle change quantity', () => {
        const expectedState = {
            pair: '',
            side: 'BUY',
            orderType: 'MARKET',
            limit:0 ,
            quantity: 37
        };

        expect(reducer(initialState, { type: actions.CHANGE_QUANTITY, quantity: 37 })).toEqual(expectedState)
    });
});
