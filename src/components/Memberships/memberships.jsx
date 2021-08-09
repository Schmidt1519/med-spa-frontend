import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import AddToCart from '../Cart/addToCart';
import './memberships.css';

function Memberships(props) {
    // console.log(props);
    console.log(props.user);
    console.log(props.loggedIn);

    if(props.loggedIn === true){
        const membershipsList = props.memberships.map(membership => {
            return <tr key={membership.id}>
                <td>{membership.type}</td>
                <td>{membership.detail}</td>
                <td>${membership.price}</td>
                <td><AddToCart createCart={props.createCart} user={props.user} loggedIn={props.loggedIn}
                membershipId={membership.id} getCartById={props.getCartById}/> </td>
            </tr>
            })
        return (
            <div>
                <Container>
                    <h1 className="memberships">Our Membership Packages</h1>
                <Table bordered variant='light' classname="membershipList">
                    <thead>
                        <tr>
                            <th>Membership</th>
                            <th>Details</th>
                            <th>Price</th>
                            <th>Subscribe</th>
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
    else{
        const membershipsList = props.memberships.map(membership => {
            return <tr key={membership.id}>
                <td>{membership.type}</td>
                <td>{membership.detail}</td>
                <td>${membership.price}</td>
            </tr>
            })
        return (
            <div>
                <Container>
                    <h1 className="memberships">Our Membership Packages</h1>
                <Table bordered variant='light' classname="membershipList">
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


    
}

export default Memberships;
