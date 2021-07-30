import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Cart from '../Cart/cart';

function Memberships(props) {
    console.log(props);
    const membershipsList = props.memberships.map(membership => {
        return <tr key={membership.id}>
            <td>{membership.type}</td>
            <td>{membership.detail}</td>
            <td>${membership.price}</td>
            <td><Cart createCart={props.createCart}/> </td>
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
                    {membershipsList}
                </tbody>
            </Table>
            </Container>
        </div>
    )
}

export default Memberships;
