import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

function Profile(props) {
    console.log(props.currentUser);

    const userApptList = props.

    return (
        <Container>   
            <ListGroup>
            <ListGroup.Item>Username: {props.currentUser.username}</ListGroup.Item>
            <ListGroup.Item>First Name: {props.currentUser.first_name}</ListGroup.Item>
            <ListGroup.Item>Last Name: {props.currentUser.last_name}</ListGroup.Item>
            <ListGroup.Item>Email Address: {props.currentUser.email}</ListGroup.Item>
            <ListGroup.Item>Phone #: {props.currentUser.phone}</ListGroup.Item>
            <ListGroup.Item>* highlight this row * Active Membership: {props.MembershipByUserId.type}</ListGroup.Item>
            </ListGroup>

        </Container>

    )
}

export default Profile;
