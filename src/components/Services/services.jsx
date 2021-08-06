import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './services.css';

function Services(props) {
    console.log(props.user.id);
    console.log(props.user);
    console.log(props.loggedIn);
    
    let history = useHistory();

    if(props.loggedIn === true){
    function handleClick() {
        history.push("/book");
    }

    let servicesList = props.services.map(service => {
        return <tr key={service.id} onClick={handleClick} style={{cursor:'pointer'}}>
            <td><img src={service.image} width="225" height="200" alt="service images"/></td>
            <td>{service.name}</td>
            <td>{service.description}</td>
        </tr>
        })
        return (
            <div className="services-outer">
                <Container>
                    <h1 className="services">Click to book today!</h1>
                <Table border variant='light' className="servicesList">
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

        else{
        function handleClick() {
            history.push("/login");
        }
    
        let servicesList = props.services.map(service => {
            return <tr key={service.id} onClick={handleClick} style={{cursor:'pointer'}}>
                <td><img src={service.image} width="225" height="200" alt="service images"/></td>
                <td>{service.name}</td>
                <td>{service.description}</td>
            </tr>
            })
            return (
                <div className="services-outer">
                    <Container>
                        <h1 className="services">Click to book today!</h1>
                    <Table border variant='light' className="servicesList">
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
}

export default Services;
