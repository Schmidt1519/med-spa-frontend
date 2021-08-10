import React, { useState, useEffect } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import './viewCart.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Profile from '../Profile/profile';

function ViewCart(props) {
    console.log("viewcart", props);
    console.log(props.newKey);
    console.log(props.user);
    console.log(props.loggedIn);
    console.log(props.cartById);

    const [cartItems, setCartItems] = useState(props.cartById);

    // STRIPE
    let handleToken = (token) => {
        console.log({token});
    }

    useEffect( async () => {
        await getCartById(props.user.id);
        console.log(cartItems);
    }, []);

    let getCartById = async (user) => {
        try{
          console.log("getCartById -- user", user);
          let response = await axios.get(`http://127.0.0.1:8000/carts/${user}/`);
          console.log("get cart by ID", response.data) 
          setCartItems(response.data);
        }
        catch(err) {
          console.log(err);
          setCartItems(null);
        }
      }

      let deleteFromCart = async (id) => {
        try{
          await axios.delete(`http://127.0.0.1:8000/carts/${id}/`)
          console.log("deleted");
        }
        catch(err) {
          console.log(err);
        }
      }

    let deleteCart = async () => {
        console.log("begin delete from cart")
        await deleteFromCart(props.user.id);
        await getCartById(props.user.id);
    }

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
                  <th>Unsubscribe</th>
                  <th>Pay</th>
              </tr>
          </thead>
          {cartItems &&
          <tbody>
              <tr>
                  <td>{cartItems.membership.type}</td>
                  <td>{cartItems.membership.detail}</td>
                  <td>{cartItems.membership.price}</td>
                  <td><Button variant="outline-danger" type="button" onClick={() => deleteCart()}>Delete</Button></td>
                  <td><StripeCheckout stripeKey="pk_test_51JJVo1LbC0X6EBVPG44wJbBpN1Y7RdThoYhk0VeP6GORVX4jreI7CCoFAUZFVo5RgBu7Vd1sZSfl2eVrA3XEPBCZ000T4zeLcF" 
                  token={handleToken}
                  amount={cartItems.membership.price * 100} /></td>
              </tr>
          </tbody>
          }
      </Table>
      <Route path="/profile" render={props => <Profile {...props} cartItems={cartItems} />} />
      </Container>
      </div>
    )
}

export default ViewCart;
