import * as actionTypes from './actionTypes';

export const selectPair = (pair) => {
    return {
        type: actionTypes.SELECT_PAIR,
        pair
    };
};

export const changeSide = (side) => {
    return {
        type: actionTypes.CHANGE_SIDE,
        side
    };
};


export const changeOrderType = (orderType) => {
    return {
        type: actionTypes.CHANGE_ORDER_TYPE,
        orderType
    };
};

export const changeLimit = (limit) => {
    return {
        type: actionTypes.CHANGE_LIMIT,
        limit
    };
};

export const changeQuantity = (quantity) => {
    return {
        type: actionTypes.CHANGE_QUANTITY,
        quantity
    };
};

export const addOrder = (order) => {
    return  {
        type: actionTypes.ADD_ORDER,
        order
    };
};