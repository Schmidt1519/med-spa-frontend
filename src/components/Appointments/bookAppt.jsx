import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const BookAppt = (props) => {
    // console.log(props);
    // const { values, handleChange, handleSubmit } = useForm(() => BookAppointment(props.appointmentId.id, values));
    // const [updateAppointment, setUpdateAppointment] = useState(props.appointmentId);
    const [redirect, setRedirect] = useState(false);
  
    async function BookAppointment(){
        const updateAppt = {
            'user': props.user.id,
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
            : <Redirect to='/'/>}
        </div>
    );
}

export default BookAppt;
