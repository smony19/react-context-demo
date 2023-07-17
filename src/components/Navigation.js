import React, { useContext } from "react";
import { Button, Nav, NavLink, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userContext } from "../App";

function Navigation() {
    
    const [signedIn, setSignedIn ] = useContext(userContext)

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
                    <Button className="ml-auto" onClick={() => setSignedIn(!signedIn)}>
                        {signedIn ? 'Sign out' : 'Sign In'}
                    </Button>
                </Nav>
            </Nav>
        </Navbar>
    );
}

export { Navigation };