import React from "react";

function Dashboard(props) {    
    return props.signedIn ? <h1>Welcome to your Dashboard</h1> : <h1>Login to view your dashboard.</h1>;
}

export { Dashboard };