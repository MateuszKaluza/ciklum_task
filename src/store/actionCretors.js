import * as actionTypes from './actionTypes';

export const selectPair = (pair) => {
    return {
        type: actionTypes.SELECT_PAIR,
        pair
    };
}

export const changeSide = (side) => {
    return {
        type: actionTypes.CHANGE_SIDE,
        side
    };
}


export const changeOrderType = (orderType) => {
    return {
        type: actionTypes.CHANGE_ORDER_TYPE,
        orderType
    };
}