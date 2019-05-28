import React from 'react';
import {Input} from "reactstrap";
import {connect} from 'react-redux'
import {changeLimit} from '../store/actionCretors';
import withFormGroup from '../hoc/withFormGroup';

const LimitInput = (props) => {
    return (
        <Input type="number"  min="0" value={props.limit} onChange={(e) => props.changeLimit(+e.target.value)}/>
    );
};

const mapStateToProps = (state) => {
    return {
        limit: state.limit
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeLimit: (quantity) => dispatch(changeLimit(quantity))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withFormGroup (LimitInput , "Limit"));