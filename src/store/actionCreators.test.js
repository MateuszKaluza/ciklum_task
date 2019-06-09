import * as actions from './actionCretors';
import * as types from './actionTypes';

describe('actionCreators', () => {
    it('should create an action for select pair', () => {
        const pair = 'xyz';
        const expectedAction = {
            type: types.SELECT_PAIR,
            pair
        };

        expect(actions.selectPair(pair)).toEqual(expectedAction)
    });

    it('should create an action for changeSide', () => {
        const side = 'BUY';
        const expectedAction = {
            type: types.CHANGE_SIDE,
            side
        };

        expect(actions.changeSide(side)).toEqual(expectedAction)
    });


    it('should create an action for change order type', () => {
        const orderType = 'MARKET';
        const expectedAction = {
            type: types.CHANGE_ORDER_TYPE,
            orderType
        };

        expect(actions.changeOrderType(orderType)).toEqual(expectedAction)
    });

    it('should create an action for change limit', () => {
        const limit = 42;
        const expectedAction = {
            type: types.CHANGE_LIMIT,
            limit
        };

        expect(actions.changeLimit(limit)).toEqual(expectedAction)
    });


    it('should create an action for change quantity', () => {
        const quantity = 44;
        const expectedAction = {
            type: types.CHANGE_QUANTITY,
            quantity
        };

        expect(actions.changeQuantity(quantity)).toEqual(expectedAction)
    });

    it('should create an action for add order', () => {
        const order = {};
        const expectedAction = {
            type: types.ADD_ORDER,
            order
        };

        expect(actions.addOrder(order)).toEqual(expectedAction)
    });
});