import React from 'react';
import {connect} from "react-redux";
import {Button, Col, FormGroup} from "reactstrap";
import localStorage from 'localStorage';
import {addOrder} from "../store/actionCretors";

const LOCAL_STORAGE_KEY = 'orders';

export const SubmitButton = (props) => {
    return (
        <FormGroup row>
            <Col sm={7}>
                <Button onClick={handleClick} disabled={isDisabled()}>Submit</Button>
            </Col>
        </FormGroup>
    );

    function handleClick(event) {
        event.preventDefault();
        saveInLocalStorage();
        props.addOrder(props.order);

        function saveInLocalStorage() {
            const items = localStorage.getItem(LOCAL_STORAGE_KEY);

            let orders = items || [];
            if (items)
                orders = JSON.parse(orders);

            orders.push(props.order);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(orders));
        }
    }

    function isDisabled() {
        return props.order.orderType === 'LIMIT' && props.order.limit === 0;
    }
};

const mapStateToProps = (state) => {
    return {
        order: {
            pair: state.pair,
            side: state.side,
            orderType: state.orderType,
            limit: state.limit,
            quantity: state.quantity
        }
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addOrder: (order) => dispatch(addOrder(order))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton);