import React, { useState } from 'react';
import useForm from '../UseForm/useForm';
import { Form, Button, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
    const { values, handleChange, handleSubmit } = useForm(login);
    const [redirect, setRedirect] = useState(false);

    async function login(){
        const login = {...values};
        await props.loginUser(login);
        setRedirect(true);
    }

    return(
        <div>
            {!redirect ?
            <Container>
            <Form onSubmit ={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicLogin">
       
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' name='email' onChange={handleChange} value={values.email}/>
               
                <Form.Label>Password</Form.Label>
                <Form.Control type='text' name='password' onChange={handleChange} value={values.password}/>
                
                </Form.Group>
                <Button variant="outline-primary" type='submit'>Login</Button>
            </Form>
            </Container>
            : <Redirect to='/'/>}
        </div>
    )
}

export default Login;
