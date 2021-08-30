import React, { useState } from 'react';
import useForm from '../UseForm/useForm';
import { Form, Button, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import './login.css';

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
                    <h1 className="login">Login</h1>
                        <Form onSubmit ={handleSubmit}>
                            <Form.Group className="w-50" controlId="formBasicLogin">
                                <Form.Control type='text' name='email' placeholder="Email" onChange={handleChange} value={values.email}/>
                                <Form.Control type='text' name='password' placeholder="Password" onChange={handleChange} value={values.password}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicButton">
                                <Button variant="primary" type='submit'>Login</Button>
                            </Form.Group>
                        </Form>
                </Container>
            : <Redirect to='/'/>}
        </div>
    )
}

export default Login;
