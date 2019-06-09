import * as actionTypes from './actionTypes';

const initialState = {
    pair: '',
    side: 'BUY',
    orderType: 'MARKET',
    limit: 0,
    quantity: 1
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SELECT_PAIR:
            return {...state, pair: action.pair};
        case actionTypes.CHANGE_SIDE:
            return {...state, side: action.side};
        case actionTypes.CHANGE_ORDER_TYPE:
            return {...state, orderType: action.orderType};
        case actionTypes.CHANGE_LIMIT:
            return {...state, limit: action.limit};
        case actionTypes.CHANGE_QUANTITY:
            return {...state, quantity: action.quantity};
        default:
            return state;
    }
};

export default reducer;