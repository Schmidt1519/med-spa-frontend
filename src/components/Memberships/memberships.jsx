import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import AddToCart from '../Cart/addToCart';

function Memberships(props) {
    console.log(props);
    const membershipsList = props.memberships.map(membership => {
        return <tr key={membership.id}>
            <td>{membership.type}</td>
            <td>{membership.detail}</td>
            <td>${membership.price}</td>
            <td><AddToCart createCart={props.createCart} currentUser={props.currentUser}
            membershipId={membership.id}/> </td>
        </tr>
        })
    return (
        <div>
            <Container>
                <h1>Our Membership Packages</h1>
            <Table classname="membershipList">
                <thead>
                    <tr>
                        <th>Membership</th>
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
