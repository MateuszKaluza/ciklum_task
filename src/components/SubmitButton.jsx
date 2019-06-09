import React from 'react';
import { Button, Col, FormGroup } from "reactstrap";
import { connect } from 'react-redux';

const SubmitButton = (props) => {
    return (
        <FormGroup row>
            <Col sm={7}>
                <Button onClick={(e) => e.preventDefault()} disabled={props.isEnabled()}>Submit</Button>
            </Col>
        </FormGroup>
    );
};

const mapStateToProps = (state) => {
    return {
        isEnabled: () => {
            const buttonState = !!state.limit && !!state.side && !!state.orderType && !!state.quantity;
            return state.orderType === 'LIMIT' ? buttonState && !!state.limit : buttonState;
        }
    };
}

export default connect(mapStateToProps)(SubmitButton);