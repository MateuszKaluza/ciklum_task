import React, { Component } from 'react';
import { Form, Button, CustomInput, FormGroup, Label, Input, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class OrderForm extends Component {
    render() {
        return (
            <Form >
                <FormGroup row>
                    <Label sm={2} for="exampleEmail">Pair</Label>
                    <Col sm={5}>
                        <Dropdown isOpen={false}>
                            <DropdownToggle caret>
                                Select
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Pairs</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Tabaluga</DropdownItem>
                                <DropdownItem>Lucky Luke</DropdownItem>
                                <DropdownItem>Doge</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Side</Label>
                    <Col sm={5}>
                        <CustomInput type="radio" id="buy" name="side" label="BUY" />
                        <CustomInput type="radio" id="sell" name="side" label="SELL" />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Order Type</Label>
                    <Col sm={5}>
                        <CustomInput type="radio" id="market" name="orderType" label="MARKET" />
                        <CustomInput type="radio" id="limit" name="orderType" label="LIMIT" />
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

                <FormGroup  row>
                    <Col sm={7}>
                        <Button>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default OrderForm;