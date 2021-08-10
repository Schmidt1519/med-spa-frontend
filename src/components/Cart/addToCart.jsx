import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import useForm from '../UseForm/useForm';
import { Button, Form, Container } from "react-bootstrap";

const AddToCart = (props) => {
    console.log(props.user);
    console.log(props.loggedIn);
    
    const { values, handleChange, handleSubmit } = useForm(AddCart)
    const [redirect, setRedirect] = useState(false);

    async function AddCart(){
        console.log("testing for add to cart", values);
 
        const newCart = {'membership': props.membershipId, 
        'user': props.user.id, 
        'quantity':1}
        
        if(props.user.membership === null || props.user.membership === undefined) {
        await props.createCart(newCart);
        }
        else{
            alert("User already has membership in cart")
        }
        console.log(newCart);
        setRedirect(true);
    }

    return(
        <div>
            {!redirect ?
            <Container>
            <Form onSubmit ={handleSubmit}>
                <Form.Control type='hidden' name='quantity' value={1}/>
                <Form.Control type='hidden' name='membership' value={props.membershipId}/>
                <Button variant="outline-success" type='submit'> Add to Cart</Button>
            </Form>
            </Container>
            : <Redirect to='/cart'/>}
        </div>
    );
}

export default AddToCart;
