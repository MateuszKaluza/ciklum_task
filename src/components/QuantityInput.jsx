import React from 'react';
import {Input} from "reactstrap";
import {changeQuantity} from "../store/actionCretors";
import {connect} from "react-redux";
import withFormGroup from '../hoc/withFormGroup';

const QuantityInput = (props) => {
    return (
        <Input type="number" min="1" value={props.quantity} onChange={(e) => props.changeQuantity(+e.target.value)}/>
    );
};

const mapStateToProps = (state) => {
    return {
        quantity: state.quantity
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeQuantity: (quantity) => dispatch(changeQuantity(quantity))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withFormGroup(QuantityInput, "Quantity"));