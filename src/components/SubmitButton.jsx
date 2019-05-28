import React from 'react';
import {Button, Col, FormGroup} from "reactstrap";

const SubmitButton = (props) => {
    return (
        <FormGroup row>
            <Col sm={7}>
                <Button onClick={(e) => e.preventDefault() }>Submit</Button>
            </Col>
        </FormGroup>
    );
};

export default SubmitButton;