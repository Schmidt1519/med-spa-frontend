import React, { useState } from 'react';
import useForm from '../UseForm/useForm';
import { Form, Button, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

const Registration = (props) => {
    const { values, handleChange, handleSubmit } = useForm(register);
    const [redirect, setRedirect] = useState(false);

    async function register(){
        const user = {...values};
        await props.registerUser(user);
        setRedirect(true);
    }

    return(
        <div>
            {!redirect ?
            <Container>
            <Form onSubmit ={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicRegister">

                <Form.Label>Username</Form.Label>
                <Form.Control type='text' name='username' onChange={handleChange} value={values.username}/>
 
                <Form.Label>Password</Form.Label>
                <Form.Control type='text' name='password' onChange={handleChange} value={values.password}/>
               
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type='text' name='re_password' onChange={handleChange} value={values.re_password}/>
             
                <Form.Label>First Name</Form.Label>
                <Form.Control type='text' name='first_name' onChange={handleChange} value={values.first_name}/>
              
                <Form.Label>Last Name</Form.Label>
                <Form.Control type='text' name='last_name' onChange={handleChange} value={values.last_name}/>
               
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' name='email' onChange={handleChange} value={values.email}/>
              
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type='text' name='phone' onChange={handleChange} value={values.phone}/>
              
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicButton">
                <Button variant="success" type='submit' value='Submit'>Register Account</Button>{' '}
                <Button variant="danger" type='reset' value='reset'>Clear Form</Button>
                </Form.Group>
            </Form>
            </Container>
            : <Redirect to='/'/>}
        </div>
    );
}

export default Registration;
