import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import useForm from '../UseForm/useForm';
import { Button, Form, Container } from 'react-bootstrap';
import axios from 'axios';

const BookAppt = (props) => {
    console.log(props);
    // const { values, handleChange, handleSubmit } = useForm(() => BookAppointment(props.appointmentId.id, values));
    // const [updateAppointment, setUpdateAppointment] = useState(props.appointmentId);
    const [redirect, setRedirect] = useState(false);
  
    async function BookAppointment(){
        const updateAppt = {
            'user': props.currentUser.id,
            'service': props.appointmentId.service, 
            'date': props.appointmentId.date, 
            'start_time': props.appointmentId.start_time, 
            'end_time': props.appointmentId.end_time, 
            'is_available': false} 
            
            console.log(updateAppt);
        
        props.setAppointment(props.appointmentId, updateAppt);
        setRedirect(true);
    }

    return(
        <div>
            {!redirect ?
                <div>
                    <Button variant="primary" type="button" onClick={() =>
                    BookAppointment()}>Book</Button>
                </div>
    //         <Container>
    //         <Form onSubmit={handleSubmit}>
    //             <Form.Control type='hidden' name='service' value={props.appointmentId.service}/>
    //             <Form.Control type='hidden' name='date' value={props.appointmentId.date}/>
    //             <Form.Control type='hidden' name='start_time' value={props.appointmentId.start_time}/>
    //             <Form.Control type='hidden' name='end_time' value={props.appointmentId.end_time}/>
    //             <Form.Control type='hidden' name='is_available' value={false}/>
    //             <Button variant="outline-success" type='submit'>Book</Button>
    //         </Form>
    //         </Container>
            : <Redirect to='/'/>}
        </div>
    );
}

export default BookAppt;
