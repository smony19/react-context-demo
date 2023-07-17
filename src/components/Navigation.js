import React from "react";
import { Button, Nav, NavLink, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation(props) {
    
    return (
        <Navbar>
            <Nav className="container-fluid">
                <Nav.Link>
                    <NavLink as={Link} to='/'>Home</NavLink>
                </Nav.Link>           

                <Nav.Link>
                    <NavLink as={Link} to='/dashboard'>Dashboard</NavLink>
                </Nav.Link>   

                <Nav className="justify-content-end" style={{ width: "100%" }}>
                    <Button className="ml-auto" onClick={() => props.setSignedIn(!props.signedIn)}>
                        {props.signedIn ? 'Sign out' : 'Sign In'}
                    </Button>
                </Nav>
            </Nav>
        </Navbar>
    );
}

export { Navigation };