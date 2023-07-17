import React from "react";
import { userContext } from "../App";
import { useContext } from "react";

function Dashboard() {
    const [user] = useContext(userContext);
    return user ? <h1>Welcome to your Dashboard</h1> : <h1>Login to view your dashboard.</h1>;
}

export { Dashboard };