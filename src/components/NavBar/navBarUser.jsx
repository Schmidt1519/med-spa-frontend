import React  from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const NavBarUser = () => (
    <Navbar bg="default" expand="sm">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/register">Register</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                </Nav>
            </Navbar.Collapse>
    </Navbar>
);

export default NavBarUser;
