import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import useForm from '../UseForm/useForm';
import { Button, Form, Col, Row, Container } from "react-bootstrap";

function Cart(props) {
    const { values, handleChange, handleSubmit } = useForm(AddToCart)
    const [cart, setCart] = useState(null);
    const [redirect, setRedirect] = useState(false);

    async function AddToCart(){
        const user = {...values};
        await props.createCart(user);
        setRedirect(true);
    }

    return(
        <div>
            {!redirect ?
            <Container>
            <Form onSubmit ={handleSubmit}>
                <Form.Control type='number' name='quantity' onChange={handleChange} value={values.quantity}/>
                <Button variant="outline-success" type='submit'>Add</Button>
            </Form>
            </Container>
            : <Redirect to='/cart'/>}
        </div>
    );
}

export default Cart;
