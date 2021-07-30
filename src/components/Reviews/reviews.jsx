import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container, Button } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import ReviewForm from './reviewForm';
import './reviews.css';

function Reviews(props) {
    console.log(props);
    console.log(props.currentUser);

    const reviewsList = props.reviews.map(review => {
        return <tr key={review.id}>
            <td>{props.allUsers.username}</td>
            <td>{review.rating}</td>
            <td>{review.review}</td>
        </tr>
        });

    return (
        <div>
            <Container>
            <Button variant="outline-primary" className="reviewForm"><Link to='/reviewForm'>Add Review</Link></Button>
            <Route path="/createReview" render={props => <ReviewForm {...props} currentUser={props.currentUser} createReview={props.createReview} />} />
            <Table classname="reviewsList">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Rating</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>
                    {reviewsList}
                </tbody>
            </Table>
            </Container>
        </div>
    )
}

export default Reviews;
