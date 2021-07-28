import React from 'react';
import useForm from '../UseForm/useForm';
import { Form, Button, Col, Row } from 'react-bootstrap';


const Registration = (props) => {
    const { values, handleChange, handleSubmit } = useForm(register);

    async function register(){
        const user = {...values};
        await props.registerUser(user);
    }

    return(
        <div>
            <Form onSubmit ={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicRegister">
                <Row>
                <Col>
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' name='username' onChange={handleChange} value={values.username}/>
                </Col>
                <Col>
                <Form.Label>Password</Form.Label>
                <Form.Control type='text' name='password' onChange={handleChange} value={values.password}/>
                </Col>
                <Col>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type='text' name='re_password' onChange={handleChange} value={values.re_password}/>
                </Col>
                </Row>
                <Row>
                <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control type='text' name='first_name' onChange={handleChange} value={values.first_name}/>
                </Col>
                <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type='text' name='last_name' onChange={handleChange} value={values.last_name}/>
                </Col>
                <Col>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' name='email' onChange={handleChange} value={values.email}/>
                </Col>
                <Col>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type='text' name='phone' onChange={handleChange} value={values.phone}/>
                </Col>
                </Row>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicButton">
                <Button variant="outline-success" type='submit' value='Submit'>Register Account</Button>{' '}
                <Button variant="outline-danger" type='reset' value='reset'>Clear Form</Button>
                </Form.Group>
            </Form>
        </div>
    );
}

export default Registration;
