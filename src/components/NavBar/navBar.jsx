import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navBar.css';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    console.log(props.loggedIn);
    console.log(props.user);

    if(props.loggedIn === false) {
    return(<Navbar bg="light" expand="md">
            <Navbar.Brand as={Link} to="/" className="logo">Cornerstone Med Spa</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                    <Nav.Link as={Link} to="/results">Results</Nav.Link>
                    <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
                    <Nav.Link as={Link} to="/memberships">Memberships</Nav.Link>
                    <Nav.Link as={Link} to="/login">Book</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
    </Navbar>
    )
    }
    else{
    return(
    <Navbar bg="light" expand="md">
        <Navbar.Brand as={Link} to="/" className="logo">Cornerstone Med Spa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                <Nav.Link as={Link} to="/results">Results</Nav.Link>
                <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
                <Nav.Link as={Link} to="/memberships">Memberships</Nav.Link>
                <Nav.Link as={Link} to="/book">Book</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
    }
}

export default NavBar;
