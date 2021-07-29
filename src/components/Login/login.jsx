import React from 'react';
import useForm from '../UseForm/useForm';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';


const Login = (props) => {
    const { values, handleChange, handleSubmit } = useForm(login);

    async function login(){
        const login = {...values};
        await props.loginUser(login);
        //console.log(props.user);
    }

    return(
        <div>
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
        </div>
    )
}

export default Login;
