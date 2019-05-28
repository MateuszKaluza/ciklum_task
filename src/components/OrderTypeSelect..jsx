import React from 'react';
import { CustomInput } from 'reactstrap';
import { connect } from 'react-redux'
import { changeOrderType } from '../store/actionCretors';
import withFormGroup from '../hoc/withFormGroup';

const OrderTypeSelect = (props) => {
    return (
        <>
            <CustomInput type="radio" id="market" name="orderType" label="MARKET" onChange={() => props.changeOrderType('MARKET')} />
            <CustomInput type="radio" id="limit" name="orderType" label="LIMIT" onChange={() => props.changeOrderType('LIMIT')} />
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        orderType: state.orderType
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeOrderType: (orderType) => dispatch(changeOrderType(orderType))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withFormGroup(OrderTypeSelect, "Order type"));