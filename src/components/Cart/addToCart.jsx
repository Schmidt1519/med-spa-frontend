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
        let membership = values.membership;

        const newCart = {...values, 'user': props.currentUser.id, 'membership': membership}
        await props.createCart(newCart);
        setRedirect(true);
    }

    return(
        <div>
            {!redirect ?
            <Container>
            <Form onSubmit ={handleSubmit}>
                <Form.Control type='number' name='quantity' onChange={handleChange} value={values.membership}/>
                <Button variant="outline-success" type='submit'>Add</Button>
            </Form>
            </Container>
            : <Redirect to='/cart'/>}
        </div>
    );
}

export default AddToCart;
