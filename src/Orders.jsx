import React from 'react';
import {connect} from 'react-redux';

import {
    Card, CardHeader, CardBody, CardText
} from 'reactstrap';


export const Orders = (props) => {
    const {orders} = props;
    return (
        <Card>
            <CardHeader>Orders</CardHeader>
            <CardBody>
                {orders.map((order, index) => {
                    return <CardText key={index}>
                        <code>{JSON.stringify(order)}</code>
                    </CardText>
                })}
            </CardBody>
        </Card>
    );
};

const mapStateToProps = (state) => {
    return {
        orders: state.orders
    }
};

export default connect(mapStateToProps)(Orders);