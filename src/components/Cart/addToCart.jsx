import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import useForm from '../UseForm/useForm';
import { Button, Form, Container } from "react-bootstrap";
import Memberships from '../Memberships/memberships';

const AddToCart = (props) => {
    const { values, handleChange, handleSubmit } = useForm(AddCart)
    const [cart, setCart] = useState(null);
    const [redirect, setRedirect] = useState(false);

    async function AddCart(){
        console.log("testing for add to cart", values);
 
        const newCart = {'membership': props.membershipId, 'user': props.currentUser.id, 'quantity':1}
        
        if(props.currentUser.membership == null) {
        await props.createCart(newCart);
        }
        else{
            alert("User already has membership in cart")
        }
        setRedirect(true);
    }

    return(
        <div>
            {!redirect ?
            <Container>
            <Form onSubmit ={handleSubmit}>
                <Form.Control type='hidden' name='quantity' value={1}/>
                <Form.Control type='hidden' name='membership' value={props.membershipId}/>
                <Button variant="outline-success" type='submit'>Add</Button>
            </Form>
            </Container>
            : <Redirect to='/'/>}
        </div>
    );
}

export default AddToCart;
