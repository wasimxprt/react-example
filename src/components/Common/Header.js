import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {

    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/stateless">Stateless Component</Link></li>
                        <li><Link to="/propsexample">Props</Link></li>
                        <li><Link to="/formsexample">Forms</Link></li>
                        <li><Link to="/eventsexample">Event Handling</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};