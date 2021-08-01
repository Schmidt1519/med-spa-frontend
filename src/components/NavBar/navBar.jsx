import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const NavBar = () => (
    <Navbar bg="light" expand="md">
            <Navbar.Brand href="/home">Med Spa</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/services">Services</Nav.Link>
                    <Nav.Link href="/results">Results</Nav.Link>
                    <Nav.Link href="/reviews">Reviews</Nav.Link>
                    <Nav.Link href="/memberships">Memberships</Nav.Link>
                    <Nav.Link href="/book">Book</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
    </Navbar>
);

export default NavBar;
