import React, { Component } from 'react';
import { Form, Button, CustomInput, FormGroup, Label, Input, Col } from 'reactstrap';
import PairSelect from './PairSelect';
import SideSelect from './SideSelect';
import OrderTypeSelect from './OrderTypeSelect.';
class OrderForm extends Component {
    render() {
        return (
            <Form >
                <FormGroup row>
                    <Label sm={2} for="pairSelect">Pair</Label>
                    <Col sm={5}>
                        <PairSelect />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="side" sm={2}>Side</Label>
                    <Col sm={5}>
                        <SideSelect />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Order Type</Label>
                    <Col sm={5}>
                        <OrderTypeSelect />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Limit</Label>
                    <Col sm={5}>
                        <Input type="number" id="limit" name="limit" label="limit" />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Quantity</Label>
                    <Col sm={5}>
                        <Input type="number" id="quantity" name="quantity" label="quantity" />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col sm={7}>
                        <Button>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default OrderForm;