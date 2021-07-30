import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import DeleteFromCart from './deleteFromCart';

function ViewCart(props) {
    console.log(props);
    console.log(props.cartById);
    if(props.cartById === undefined) {
        return(null)
    }
    else{

    console.log(props.cartById);

    return (
        <div>
            <Container>
                <h1>Your Cart</h1>
            <Table classname="cartList">
                <thead>
                    <tr>
                        <th>Package</th>
                        <th>Details</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.cartById.membership.type}</td>
                        <td>{props.cartById.membership.detail}</td>
                        <td>{props.cartById.membership.price}</td>
                    </tr>
                </tbody>
            </Table>
            </Container>
        </div>
    )}
}

export default ViewCart;
