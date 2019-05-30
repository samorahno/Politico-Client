import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../styles/dashboard.css';
import { logoutUser } from '../../actions';

const Sidebar = (props) => {
    const { logout, history } = props;
    const logoutSuccess = () => {
        logout();
        history.push('/');
    };
    return (
        <div className="side-nav visible" id="togle_nav">
            <nav>
                <ul>
                    <li className="active">
                        <Link to="/dashboard">
                            <span > <i className="fa fa-home fa-fw" /> </span>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/party-admin">
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
                    <li style={{ color: '#fff', cursor: 'pointer' }} onClick={logoutSuccess}>
                        <span> <i className="fa fa-power-off" /> </span>
                        <span>Logout</span>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

const mapDispatchToProps = ({
    logout: logoutUser
});

export default withRouter(connect(null, mapDispatchToProps)(Sidebar));
