import React, { useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';
import DeleteFromCart from './deleteFromCart';
import StripeCheckout from 'react-stripe-checkout';
import './viewCart.css';

function ViewCart(props) {
    console.log("viewcart", props);
    console.log(props.newKey);
    console.log(props.user);
    // console.log("viewcart - cartById", props.cartById);
    // console.log("viewcart - user", props.user);
    // const[newKey, setNewKey] = useState([])
    const [cartItems, setCartItems] = useState([props.cartById]); 

    // STRIPE
    let handleToken = (token, addresses) => {
        console.log({token, addresses});
    }

    useEffect(() => {
        props.getCartById(props.user.id);
    }, [props.cartById]);

    if(props.cartById.membership === undefined && props.newKey === undefined) {
        return(
            <div>
            <Container>
            <h1 className="cart">Your Cart</h1>
                <Table bordered variant='light' classname="cartList">
                <thead>
                    <tr>
                        <th>Membership</th>
                        <th>Details</th>
                        <th>Price</th>
                        <th>Remove</th>
                        <th>Pay</th>
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
                    <h1 className="cart">Your Cart</h1>
                <Table bordered variant='light' classname="cartList">
                    <thead>
                        <tr>
                            <th>Membership</th>
                            <th>Details</th>
                            <th>Price</th>
                            <th>Remove</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.cartById.membership.type}</td>
                            <td>{props.cartById.membership.detail}</td>
                            <td>{props.cartById.membership.price}</td>
                            <td><DeleteFromCart user={props.user.id} getCartById={props.getCartById} deleteFromCart={props.deleteFromCart}/></td>
                            <td><StripeCheckout stripeKey="pk_test_51JJVo1LbC0X6EBVPG44wJbBpN1Y7RdThoYhk0VeP6GORVX4jreI7CCoFAUZFVo5RgBu7Vd1sZSfl2eVrA3XEPBCZ000T4zeLcF" 
                            token={handleToken}
                            amount={props.cartById.membership.price * 100} /></td>
                        </tr>
                    </tbody>
                </Table>
                </Container>
            </div>
        )}
}

export default ViewCart;
