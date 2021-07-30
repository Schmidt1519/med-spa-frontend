import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container, Button, ListGroup } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';

function Profile(props) {
    console.log(props.currentUser);
 
    return (
        <Container>   
            <ListGroup>
            <ListGroup.Item>Username: {props.currentUser.username}</ListGroup.Item>
            <ListGroup.Item>First Name: {props.currentUser.first_name}</ListGroup.Item>
            <ListGroup.Item>Last Name: {props.currentUser.last_name}</ListGroup.Item>
            <ListGroup.Item>Email Address: {props.currentUser.email}</ListGroup.Item>
            <ListGroup.Item>Phone #: {props.currentUser.phone}</ListGroup.Item>
            <ListGroup.Item>Active Membership: </ListGroup.Item>
            </ListGroup>
        </Container>
    )
}

export default Profile;
