import React from 'react'
import {Col, FormGroup, Label} from "reactstrap";

const withFormGroup = (Component, name) => {
    const wrappedComponent = (props) => {

        return (
            <FormGroup row>
                <Label sm={2}>{name}</Label>
                <Col sm={5}>
                    <Component {...props}/>
                </Col>
            </FormGroup>
        )
    };

    return wrappedComponent;
};

export default withFormGroup;