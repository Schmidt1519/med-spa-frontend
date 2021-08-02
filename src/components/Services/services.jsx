import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Services(props) {
    // console.log(props);
    let history = useHistory();

    function handleClick() {
        history.push("/book");
    }

    let servicesList = props.services.map(service => {
        return <tr key={service.id} onClick={handleClick} style={{cursor:'pointer'}}>
            <td><img src={service.image} width="275" height="250"/></td>
            <td>{service.name}</td>
            <td>{service.description}</td>
        </tr>
        })
        return (
            <div>
                <Container>
                    <h1>Click a service to book today!</h1>
                <Table classname="servicesList">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Service</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {servicesList}
                    </tbody>
                </Table>
                </Container>
            </div>
        )
}

export default Services;
