import React, { useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import DeleteFromCart from './deleteFromCart';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

function ViewCart(props) {
    console.log("viewcart", props);
    console.log(props.newKey);
    // console.log("viewcart - cartById", props.cartById);
    // console.log("viewcart - currentUser", props.currentUser);
    // const[newKey, setNewKey] = useState([])

    let handleToken = (token, addresses) => {
        console.log({token, addresses});
    }

    if(props.cartById.membership === undefined && props.newKey === undefined) {
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
                <Table bordered variant='light' classname="cartList">
                    <thead>
                        <tr>
                            <th>Membership</th>
                            <th>Details</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.cartById.membership.type}</td>
                            <td>{props.cartById.membership.detail}</td>
                            <td>{props.cartById.membership.price}</td>
                            <DeleteFromCart currentUser={props.currentUser.id} deleteFromCart={props.deleteFromCart}/>
                            <StripeCheckout stripeKey="pk_test_51JJVo1LbC0X6EBVPG44wJbBpN1Y7RdThoYhk0VeP6GORVX4jreI7CCoFAUZFVo5RgBu7Vd1sZSfl2eVrA3XEPBCZ000T4zeLcF" 
                            token={handleToken}
                            amount={props.cartById.membership.price * 100} />
                        </tr>
                    </tbody>
                </Table>
                </Container>
            </div>
        )}
}

export default ViewCart;
