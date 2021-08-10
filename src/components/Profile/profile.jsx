import React, { useState, useEffect } from 'react';
import { Container, ListGroup, Table } from 'react-bootstrap';
import './profile.css';

function Profile(props) {
    console.log(props.user);
    console.log(props.user.id);
    console.log(props.loggedIn);
    console.log(props.cartItems);
    console.log(props.appointmentByUserId);
    
    useEffect( async () => {
        await props.getAppointmentByUserId(props.user.id);
    }, []);

    // console.log(props.cartById.membership.type);

    // if(props.cartItems === undefined || props.cartItems === null) {
    //     return(
    //         <Container>   
    //             <h1 className="profile">Your Profile</h1>
    //             <ListGroup>
    //             <ListGroup.Item>Username: {props.user.username}</ListGroup.Item>
    //             <ListGroup.Item>First Name: {props.user.first_name}</ListGroup.Item>
    //             <ListGroup.Item>Last Name: {props.user.last_name}</ListGroup.Item>
    //             <ListGroup.Item>Email Address: {props.user.email}</ListGroup.Item>
    //             <ListGroup.Item>Phone #: {props.user.phone}</ListGroup.Item>
    //             <ListGroup.Item>Active Membership: N/A</ListGroup.Item>
    //             </ListGroup>
    //             <br></br>
    //             <h1 className="profile">Your Scheduled Appointments</h1>
    //             <Table bordered variant='light' classname="membershipList">
    //                 <thead>
    //                     <tr>
    //                         <th>Service</th>
    //                         <th>Date</th>
    //                         <th>Start Time</th>
    //                         <th>End Time</th>
    //                     </tr>
    //                 </thead>
    //             </Table>
    //         </Container>
    //     );
    // }
    // else{
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
            <ListGroup.Item>Username: {props.user.username}</ListGroup.Item>
            <ListGroup.Item>First Name: {props.user.first_name}</ListGroup.Item>
            <ListGroup.Item>Last Name: {props.user.last_name}</ListGroup.Item>
            <ListGroup.Item>Email Address: {props.user.email}</ListGroup.Item>
            <ListGroup.Item>Phone #: {props.user.phone}</ListGroup.Item>
            {/* <ListGroup.Item>Active Membership: {props.cartItems.membership.type}</ListGroup.Item> */}
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
    );
}

export default Profile;
