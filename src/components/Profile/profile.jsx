import React from 'react';
import { Container, ListGroup, Table } from 'react-bootstrap';
import './profile.css';

function Profile(props) {
    console.log(props.currentUser);
    // console.log(props.cartById.membership.type);

    if(props.cartById === undefined || null) {
        return(
            <Container>   
                <h1 className="profile">Your Profile</h1>
                <ListGroup>
                <ListGroup.Item>Username: {props.currentUser.username}</ListGroup.Item>
                <ListGroup.Item>First Name: {props.currentUser.first_name}</ListGroup.Item>
                <ListGroup.Item>Last Name: {props.currentUser.last_name}</ListGroup.Item>
                <ListGroup.Item>Email Address: {props.currentUser.email}</ListGroup.Item>
                <ListGroup.Item>Phone #: {props.currentUser.phone}</ListGroup.Item>
                <ListGroup.Item>Active Membership: N/A</ListGroup.Item>
                </ListGroup>
                <br></br>
                <h1 className="profile">Your Scheduled Appointments</h1>
                <Table bordered variant='light' classname="membershipList">
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {userApptList} */}
                    </tbody>
                </Table>
            </Container>
        );
    }
    else{
        const userApptList = props.appointmentByUserId.map(appointment => {
            return <tr key={appointment.id}>
                <td>{appointment.service.name}</td>
                <td>{appointment.date}</td>
                <td>{appointment.start_time}</td>
                <td>{appointment.end_time}</td>
            </tr>
            })
        
        return (
            <Container>   
                <h1 className="profile">Your Profile</h1>
                <ListGroup>
                <ListGroup.Item>Username: {props.currentUser.username}</ListGroup.Item>
                <ListGroup.Item>First Name: {props.currentUser.first_name}</ListGroup.Item>
                <ListGroup.Item>Last Name: {props.currentUser.last_name}</ListGroup.Item>
                <ListGroup.Item>Email Address: {props.currentUser.email}</ListGroup.Item>
                <ListGroup.Item>Phone #: {props.currentUser.phone}</ListGroup.Item>
                <ListGroup.Item>Active Membership: {props.cartById.membership.type}</ListGroup.Item>
                </ListGroup>
                <br></br>
                <h1 className="profile">Your Scheduled Appointments</h1>
                <Table bordered variant='light' classname="membershipList">
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userApptList}
                    </tbody>
                </Table>
            </Container>
    
        )
    }



    
}

export default Profile;
