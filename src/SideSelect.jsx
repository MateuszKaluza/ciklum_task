import React from 'react';
import { CustomInput } from 'reactstrap';
import { connect } from 'react-redux'
import { changeSide } from './store/actionCretors';

const SideSelect = (props) => {
    return (
        <>
            <CustomInput type="radio" id="buy" name="side" label="BUY" onChange={() => props.changeSide('BUY')} />
            <CustomInput type="radio" id="sell" name="side" label="SELL" onChange={() => props.changeSide('SELL')} />
        </>
    );

    function isChecked(e) {
        return props.side === e
    }
};

const mapStateToProps = (state) => {
    return {
        side: state.side
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeSide: (side) => dispatch(changeSide(side))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SideSelect);