import React, { useState } from 'react';
import useForm from '../UseForm/useForm';
import { Form, Button, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ReviewForm = (props) => {
    console.log(props);
    console.log(props.currentUser);
    const { values, handleChange, handleSubmit } = useForm(createReviews);
    const [redirect, setRedirect] = useState(false);
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    async function createReviews(){
        let review = values.review;
        
        const newReview = {...values, 'user': props.currentUser.id, 'rating': rating, 'review': review}
        await props.createReview(newReview);
        console.log(newReview)
        setRedirect(true);
    }

    return(
        <div>
            {!redirect ?
            <Container>
            <Form onSubmit ={handleSubmit}>
                <Form.Group>
                <Form.Label>Rating</Form.Label>
                {[...Array(5)].map((star, i) =>{
                    const ratingValue = i + 1;
                    return (
                    <label className="col" key={i}>
                        <input className="invisible" key={i+1} type="radio" name="rating" value={ratingValue} 
                               onClick={() => setRating(ratingValue)} required={true}/>
                        <FaStar className="star" color={ratingValue <= (hover || rating) ? "#9a0000": "#e4e5e9"}
                                size={30} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)} />
                    </label> 
                    );
                    })}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicReview">
                <Form.Label>Review</Form.Label>
                <Form.Control type='text' name='review' onChange={handleChange} value={values.review} required={true}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicButton">
                <Button variant="outline-success" type='submit' value='Submit'>Submit Review</Button>{' '}
                <Button variant="outline-danger" type='reset' value='reset'>Clear Form</Button>
                </Form.Group>
            </Form>
            </Container>
            : <Redirect to='/reviews'/>}
        </div>
    );
}

export default ReviewForm;
