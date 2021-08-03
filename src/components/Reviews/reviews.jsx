import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Container, Button } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import ReviewForm from './reviewForm';
import './reviews.css';
import { FaStar } from 'react-icons/fa';

function Reviews(props) {
    // console.log(props);
    console.log(props.reviews);
    console.log(props.currentUser);
    console.log(props.loggedIn);

    useEffect(() => {
        props.getAllReviews();
    }, []);

    const reviewsList = props.reviews.map(review => {
        return <tr key={review.id}>
            <td>{review.user.username}</td>
            <td>{review.rating} <FaStar className="starReview" size={25} color={"#9a0000"}/></td>
            <td>{review.review}</td>
        </tr>
    });

    if(props.loggedIn === false || undefined) {
        return (
            <div>
                <Container>
                {/* <Button bordered variant="primary" className="reviewForm"><Link style={{textDecoration:'none', color:'white'}} to='/reviewForm'>Add Review</Link></Button> */}
                {/* <Route path="/createReview" render={props => <ReviewForm {...props} currentUser={props.currentUser} createReview={props.createReview} />} /> */}
                <Table bordered variant='light' classname="reviewsList">
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
        );
    }
    else{
        return (
            <div>
                <Container>
                <Button bordered variant="primary" className="reviewForm"><Link style={{textDecoration:'none', color:'white'}} to='/reviewForm'>Add Review</Link></Button>
                <Route path="/createReview" render={props => <ReviewForm {...props} currentUser={props.currentUser} createReview={props.createReview} />} />
                <Table bordered variant='light' classname="reviewsList">
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
        );
    }
}

export default Reviews;
