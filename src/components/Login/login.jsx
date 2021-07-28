import React from 'react';
import useForm from '../UseForm/useForm';
import { Form, Button, Col, Row } from 'react-bootstrap';


const Login = (props) => {
    const { values, handleChange, handleSubmit } = useForm(login);

    async function login(){
        const login = {...values};
        await props.loginUser(login);
    }

    return(
        <div>
            <Form onSubmit ={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicLogin">
                <Row>
                <Col>
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' name='email' onChange={handleChange} value={values.email}/>
                </Col>
                <Col>
                <Form.Label>Password</Form.Label>
                <Form.Control type='text' name='password' onChange={handleChange} value={values.password}/>
                </Col>
                </Row>
                </Form.Group>
                <Button variant="outline-primary" type='submit'>Login</Button>
            </Form>
        </div>
    )
}

export default Login;
