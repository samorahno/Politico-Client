import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/dashboard.css';

const Sidebar = () => {
    return (
        <div className="side-nav visible" id="togle_nav">
            <nav>
                <ul>
                    <li className="active">
                        <Link to="/">
                            <span > <i className="fa fa-home fa-fw" /> </span>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/parties">
                            <span > <i className="fa fa-home fa-fw" /> </span>
                            <span>Political Party</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/office-admin">
                            <span > <i className="fa fa-compress" /> </span>
                            <span>Political Office</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/candidate">
                            <span > <i className="fa fa-pencil-square" /> </span>
                            <span>Candidate</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/vote">
                            <span > <i className="fa fa-envelope" /> </span>
                            <span>Vote</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/result">
                            <span > <i className="fa fa-envelope" /> </span>
                            <span>Vote Result</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/profile">
                            <span > <i className="fa fa-pencil" /> </span>
                            <span>View Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <span > <i className="fa fa-power-off" /> </span>
                            <span>Logout</span>
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
