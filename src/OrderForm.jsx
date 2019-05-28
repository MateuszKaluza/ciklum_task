import React, {Component} from 'react';
import {Form, Button, FormGroup, Col} from 'reactstrap';
import PairSelect from './PairSelect';
import SideSelect from './components/SideSelect';
import OrderTypeSelect from './components/OrderTypeSelect.';
import LimitInput from './components/LimitInput';
import QuantityInput from "./components/QuantityInput";
import SubmitButton from "./components/SubmitButton";

class OrderForm extends Component {
    render() {
        return (
            <Form>
                <PairSelect/>
                <SideSelect/>
                <OrderTypeSelect/>
                <LimitInput/>
                <QuantityInput/>

                <SubmitButton/>
            </Form>
        );
    }
}

export default OrderForm;