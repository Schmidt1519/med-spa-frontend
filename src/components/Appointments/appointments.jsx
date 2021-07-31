import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container, Dropdown } from 'react-bootstrap';

function Appointments(props) {
    console.log(props);
    console.log(props.appointments);
    console.log(props.currentUser);
    const appointmentsList = props.appointments.map(appointment => {
        return <tr key={appointment.id}>
            <td>{appointment.service}</td>
            <td>{appointment.date}</td>
            <td>{appointment.start_time}</td>
            <td>{appointment.end_time}</td>
            <td>{appointment.price}</td>
            
            {/* <td><BookAppt createCart={props.createCart} currentUser={props.currentUser}
            membershipId={membership.id}/> </td> */}
        </tr>
        })
    return (
        <div>
            <Container>
                <h1>Our Membership Packages</h1>
            <Table classname="membershipList">
                <thead>
                    <tr>
                        <th>Package</th>
                        <th>Details</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {appointmentsList}
                </tbody>
            </Table>
            </Container>
        </div>
    )
}

export default Appointments;
