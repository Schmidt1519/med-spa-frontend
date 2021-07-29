import React from 'react';
import useForm from '../UseForm/useForm';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';


const ReviewForm = (props) => {
    const { values, handleChange, handleSubmit } = useForm(createReviews);

    async function createReviews(){
        const user = {...values};
        await props.createReview(user);
    }

    return(
        <div>
            <Container>
            <Form onSubmit ={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicRegister">

                <Form.Label>Username</Form.Label>
                <Form.Control type='text' name='username' onChange={handleChange} value={values.username}/>
 
                <Form.Label>Password</Form.Label>
                <Form.Control type='text' name='password' onChange={handleChange} value={values.password}/>
                             
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicButton">
                <Button variant="outline-success" type='submit' value='Submit'>Submit Review</Button>{' '}
                <Button variant="outline-danger" type='reset' value='reset'>Clear Form</Button>
                </Form.Group>

            </Form>
            </Container>
        </div>
    );
}

export default ReviewForm;
