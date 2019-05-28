import * as actionTypes from './actionTypes';

const initialState = {
    pair: '',
    side: 'BUY',
    orderType: 'MARKET'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SELECT_PAIR:
            return { ...state, pair: action.pair };
        case actionTypes.CHANGE_SIDE:
            return { ...state, side: action.side }
        case actionTypes.CHANGE_ORDER_TYPE:
            return { ...state, orderType: action.orderType }
        default:
            return state;
    }
};

export default reducer;