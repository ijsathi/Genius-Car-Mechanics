import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const {users, logOut} = useAuth();
    return (
        <>
  <Navbar bg="dark" variant="dark" sticky='top' collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">Genius Car Mechanics</Navbar.Brand>
        <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav.Link  style={{color:"white"}} as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link  style={{color:"white"}} as={HashLink} to="/home#services">Services</Nav.Link>
            <Nav.Link  style={{color:"white"}} as={HashLink} to="/home#experts">Experts</Nav.Link>
            <Link style={{margin:"5px", textDecoration:"none",color:"white"}} to="/manageServices">Manage</Link>
            
            <Link  style={{margin:"5px", textDecoration:"none",color:"white",}} to="/addServices">Add Service</Link>
            {users?.displayName ?
                <Button onClick={logOut} variant="light">Logout</Button> :
                <Nav.Link style={{color:"white"}} as={Link} to="/login">Login</Nav.Link>
            }
            <Navbar.Text><a style={{textDecoration:"none",}} href="/login#login">{users?.displayName }</a>
        </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </>
    );
};

export default Header;