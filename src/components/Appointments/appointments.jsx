import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Container, Button } from 'react-bootstrap';
import BookAppt from './bookAppt';
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
                <h1>Book Your Appointment</h1>
            <Table classname="appointmentList">
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


// function Appointments(props) {
//     console.log(props);
//     console.log(props.appointments);
//     console.log(props.currentUser);
//     const [data, setData] = useState([props.appointments]);

//     return (
//         <ReactTable
//         data={props.appointments}
//         filterable columns={[
//             {
//                 Header: "Row 2 Filterable-Services",
//                 accessor: "service.name",
//                 filterable: true,
//                 filterMethod: (filter, row) => {
//                     if (filter.value === "Aesthetician Services") {
//                         return row[filter.id] === "Aesthetician Services";
//                     }
//                     if (filter.value === "Botox Injection") {
//                         return row[filter.id] === "Botox Injection";
//                     }                    
//                     if (filter.value === "Chemical Peels") {
//                         return row[filter.id] === "Chemical Peels";
//                     }
//                     if (filter.value === "Microdermabrasion") {
//                         return row[filter.id] === "Microdermabrasion";
//                     }
//                     if (filter.value === "Laser Hair Removal") {
//                         return row[filter.id] === "Laser Hair Removal";
//                     }  
//                 },
//                 Filter: ({ filter, onChange }) => (
//                     <select
//                     onChange={event => onChange(event.target.value)}
//                     style={{ width: "100%" }}
//                     value={filter ? filter.value : "all"}
//                     >
//                     <option value="Aesthetician Services">Aesthetician Services</option>
//                     <option value="Botox Injection">Botox Injection</option>
//                     <option value="Chemical Peels">Chemical Peels</option>
//                     <option value="Microdermabrasion">Microdermabrasion</option>
//                     <option value="Laser Hair Removal">Laser Hair Removal</option>
//                     </select>
//                 )
//             }
//         ]}
//     />
//     );
// }

// export default Appointments;

// function Appointments(props) {
//         console.log(props);
//         console.log(props.appointments);
//         console.log(props.currentUser);
//         const [data, setData] = useState([props.appointments]);
//         const [q, setQ] = useState("");

//     useEffect(() => {

//     }, [])

//         return (
//             <div>
//                 <div>filter goes here</div>
//                 <div>
//                     <Datatable data={data} />
//                 </div>
//             </div>



//     export default Appointments;