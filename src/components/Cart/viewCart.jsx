import React from 'react';
import { Table, Container } from 'react-bootstrap';
import DeleteFromCart from './deleteFromCart';

function ViewCart(props) {
    // console.log("viewcart", props);
    // console.log("viewcart - cartById", props.cartById);
    // console.log("viewcart - currentUser", props.currentUser);
    if(props.cartById.membership === undefined) {
        return(
            <div>
            <Container>
                <h1>Your Cart</h1>
            <Table classname="cartList">
                <thead>
                    <tr>
                        <th>Membership</th>
                        <th>Details</th>
                        <th>Price</th>
                    </tr>
                </thead>
            </Table>
            </Container>
        </div>
        )
    }
    
    else{
    // console.log(props.cartById);
        return (
            <div>
                <Container>
                    <h1>Your Cart</h1>
                <Table classname="cartList">
                    <thead>
                        <tr>
                            <th>Membership</th>
                            <th>Details</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.cartById.membership.type}</td>
                            <td>{props.cartById.membership.detail}</td>
                            <td>{props.cartById.membership.price}</td>
                            <DeleteFromCart currentUser={props.currentUser.id} deleteFromCart={props.deleteFromCart}/>
                        </tr>
                    </tbody>
                </Table>
                </Container>
            </div>
        )}
}

export default ViewCart;
