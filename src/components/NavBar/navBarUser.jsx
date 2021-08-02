import React  from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// const [loggedIn, setLoggedIn] = useState([]);

// const LoggedIn = (props) => {
//     if(props.currentUser === null) {
//         setLoggedIn = false;
//     }
//     else{setLoggedIn(true)}
// }

const NavBarUser = (props) => {
console.log(props.currentUser);

    // if(props.user === null) {
        return(
            <Navbar bg="default" expand="sm">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/register">Register</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                    <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                    <Nav.Link href="/" onClick={()=>{props.logoutUser()}}>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    // }
    // else{
    //     return(
    //         <Navbar bg="default" expand="sm">
    //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id="basic-navbar-nav">
    //             <Nav className="me-auto">
    //                 {/* <Nav.Link href="/register">Register</Nav.Link> */}
    //                 {/* <Nav.Link href="/login">Login</Nav.Link> */}
    //                 <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
    //                 <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
    //                 <Nav.Link href="/" onClick={()=>{props.logoutUser()}}>Logout</Nav.Link>
    //             </Nav>
    //         </Navbar.Collapse>
    //     </Navbar>
    //     )
    // }
}

export default NavBarUser;
