import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AuthConsumer } from './AuthProvider';
import './header.css';

class Header extends Component {
    render() {
        return (
            <AuthConsumer>
                {({ isAuth, logout}) => (
                    <Fragment>
                        <div className="btn-container">
                            <Link to="/">Home Page</Link>
                        </div>

                        {isAuth ? (
                            <Fragment>
                                <div className="btn-container">
                                    <Link to="/" onClick={logout}>Sign Out</Link>
                                </div>
                                <div className="btn-container">
                                    <Link to="/feature">Feature</Link>
                                </div>
                            </Fragment>) : (
                                <Fragment>
                                    <div className="btn-container">
                                        <Link to="/signup">Signup</Link>
                                    </div>
                                    <div className="btn-container">
                                        <Link to="/signin">Sign In</Link>
                                    </div>
                                </Fragment>)}
                    </Fragment>
                )}
            </AuthConsumer>
        );
    }
}

export default Header;