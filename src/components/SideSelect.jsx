import React from 'react';
import { CustomInput } from 'reactstrap';
import { connect } from 'react-redux'
import { changeSide } from '../store/actionCretors';
import withFormGroup from '../hoc/withFormGroup';

const BUY = 'BUY';
const SELL = 'SELL';

const SideSelect = (props) => {
    return (
        <>
            <CustomInput type="radio" id="buy" name="side" label={BUY} checked={isChecked(BUY)} onChange={() => props.changeSide(BUY)} />
            <CustomInput type="radio" id="sell" name="side" label={SELL} checked={isChecked(SELL)} onChange={() => props.changeSide(SELL)} />
        </>
    );

    function isChecked(label) {
        return props.side === label
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
};

export default connect(mapStateToProps, mapDispatchToProps)(withFormGroup(SideSelect, "Side"));