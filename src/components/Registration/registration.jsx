import React, { useState } from 'react';
import useForm from '../UseForm/useForm';
import { Form, Button, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import './registration.css';

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
                    <h1 className="registration">Registration</h1>
                        <Form onSubmit ={handleSubmit}>
                            <Form.Group className="w-50" controlId="formBasicRegister">

                            <Form.Control type='text' name='username' placeholder="Username" onChange={handleChange} value={values.username}/>
                            <Form.Control type='text' name='password' placeholder="Password" onChange={handleChange} value={values.password}/>
                            <Form.Control type='text' name='re_password' placeholder="Confirm Password"onChange={handleChange} value={values.re_password}/>
                            <Form.Control type='text' name='first_name' placeholder="First Name" onChange={handleChange} value={values.first_name}/>
                            <Form.Control type='text' name='last_name' placeholder="Last Name" onChange={handleChange} value={values.last_name}/>
                            <Form.Control type='email' name='email' placeholder="Email" onChange={handleChange} value={values.email}/>
                            <Form.Control type='text' name='phone' placeholder="Phone Number" onChange={handleChange} value={values.phone}/>
                        
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicButton">
                            <Button variant="success" type='submit' value='Submit'>Register</Button>{' '}
                            <Button variant="danger" type='reset' value='reset'>Clear Form</Button>
                            </Form.Group>
                        </Form>
                </Container>
            : <Redirect to='/'/>}
        </div>
    );
}

export default Registration;
