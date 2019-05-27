import React from 'react';
import {
    Card, CardHeader,  CardBody, CardText
} from 'reactstrap';


const Orders = (props) => {
    return (
        <Card>
            <CardHeader>Orders</CardHeader>
            <CardBody>
                <CardText>Dziwki</CardText>
                <CardText>Koks</CardText>
            </CardBody>
        </Card>
    );
};

export default Orders;