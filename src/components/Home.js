import React from "react";
import { Card } from "react-bootstrap";
import Button from'react-bootstrap/Button';

function Home(props) {
    
    return (
        <Card className="mx-2">
        
        <Card.Body>
            <Card.Title>Home</Card.Title>
            <Card.Text>
                Some quick example text to build on the home page title and make up the
                bulk of the page content.
            </Card.Text>
            {props.signedIn ? <Button variant="primary">Go to Dashboard</Button> : <Button variant="primary">Sign In</Button>}
        </Card.Body>
        </Card>
    );
}

export { Home };