import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container, Button } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import ReviewForm from './reviewForm';

function Reviews(props) {

    const reviewsList = props.reviews.map(review => {
        return <tr key={review.id}>
            <td>{review.rating}</td>
            <td>{review.review}</td>
        </tr>
        });

    return (
        <div>
            <Container>
            <Route path="/createReview" render={props => <ReviewForm {...props} createReview={props.createReview} />} />
            <Table classname="reviewsList">
                <thead>
                    <tr>
                        <th>Rating</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>
                    {reviewsList}
                </tbody>
            </Table>
            <Button variant="outline-primary" className="createReview" onClick={() => props.newReview}>Add Review</Button>
            </Container>
        </div>
    )
}

export default Reviews;
