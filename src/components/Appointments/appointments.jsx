import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container, Button } from 'react-bootstrap';
import BookAppt from './bookAppt';
import './appointments.css';
// import ReactTable from 'react-table';

function Appointments(props) {
    console.log(props);
    console.log(props.appointments);
    console.log(props.currentUser);
    const appointmentsList = props.appointments.map(appointment => {

        if(appointment.is_available === true){
            return <tr key={appointment.id}>
            <td>{appointment.service.name}</td>              
            <td>{appointment.date}</td>
            <td>{appointment.start_time}</td>
            <td>{appointment.end_time}</td>
            {/* <td>{appointment.user}</td> */}
            <td><BookAppt  currentUser={props.currentUser} setAppointment={props.setAppointment}
            appointmentId={appointment.id}/></td>
        </tr>
        }
        else{
            return <tr key={appointment.id}>
            <td>{appointment.service.name}</td>
            <td>{appointment.date}</td>
            <td>{appointment.start_time}</td>
            <td>{appointment.end_time}</td>
            {/* <td>{appointment.user}</td> */}
            <td><Button active variant="danger" disabled>Reserved</Button></td>
        </tr>
        }
    })
    return (
        <div className="appointment-outer">
            <Container>
                <h1 className="appointments">Book Your Appointment</h1>
            <Table border variant="light" classname="appointmentList">
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        
                        <th>Is Available</th>
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