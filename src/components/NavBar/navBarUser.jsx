import React  from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GrLogout } from 'react-icons/gr';
import { FiShoppingCart } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import './navBarUser.css';

const NavBarUser = (props) => {
console.log(props.loggedIn);
console.log(props.currentUser);

//     if(props.loggedIn === false) {
//         return(
//             <Navbar bg="default" expand="sm">
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="ms-auto">
//                     <Nav.Link href="/register">Register</Nav.Link>
//                     <Nav.Link href="/login">Login</Nav.Link>
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//         )
//     }
//     else{
//         return(
//             <Navbar bg="default" expand="sm">
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="ms-auto">
//                     <Nav.Link as={Link} to="/profile"><CgProfile></CgProfile></Nav.Link>
//                     <Nav.Link as={Link} to="/cart"><FiShoppingCart></FiShoppingCart></Nav.Link>
//                     <Nav.Link href="/" onClick={()=>{props.logoutUser()}}><GrLogout></GrLogout></Nav.Link>
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//         )
//     }
// }

    return(
        <Navbar bg="default" expand="sm">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/profile"><CgProfile></CgProfile></Nav.Link>
                <Nav.Link as={Link} to="/cart"><FiShoppingCart></FiShoppingCart></Nav.Link>
                <Nav.Link href="/" onClick={()=>{props.logoutUser()}}><GrLogout></GrLogout></Nav.Link>

            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default NavBarUser;
