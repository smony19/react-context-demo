import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { userContext } from "../App";

function Dashboard() {    
    const [signedIn] = useContext(userContext);
    return (
        <Card className="mx-2">        
        <Card.Body>     
            {signedIn ? 
                <Card.Title>Welcome to your Dashboard</Card.Title> : 
                <Card.Title>Login to view your dashboard</Card.Title>
            }
            <Card.Text>
                User will be able to see the contents of the dashboard if they are signed in. 
            </Card.Text>
        </Card.Body>
        </Card>
    )
}

export { Dashboard };