import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
    render() {
        return (
            <Fragment>
                <div className="btn-container">
                    <Link to="/">Home Page</Link>
                </div>
                <div  className="btn-container">
                    <Link to="/signup">Signup</Link>
                </div>
                <div  className="btn-container">
                    <Link to="/signin">Sign In</Link>
                </div>
                <div  className="btn-container">
                    <Link to="/signout">Sign Out</Link>
                </div>
                <div  className="btn-container">
                    <Link to="/feature">Feature</Link>
                </div>
            </Fragment>
        );
    }
}

export default Header;