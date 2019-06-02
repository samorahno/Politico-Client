import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../styles/dashboard.css';
import { logoutUser } from '../../actions';

export const Sidebar = (props) => {
    const { logout, history } = props;
    const logoutSuccess = () => {
        logout();
        history.push('/');
    };
    return (
        <div className="side-nav visible" id="togle_nav">
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/dashboard"
                            activeClassName="active"
                        >
                            <span > <i className="fa fa-home fa-fw" /> </span>
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/party">
                            <span > <i className="fa fa-home fa-fw" /> </span>
                            <span>Political Party</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/office">
                            <span > <i className="fa fa-compress" /> </span>
                            <span>Political Office</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/candidate">
                            <span > <i className="fa fa-pencil-square" /> </span>
                            <span>Candidate</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/vote">
                            <span > <i className="fa fa-envelope" /> </span>
                            <span>Vote</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/result">
                            <span > <i className="fa fa-envelope" /> </span>
                            <span>Vote Result</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/profile">
                            <span > <i className="fa fa-pencil" /> </span>
                            <span>View Profile</span>
                        </NavLink>
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
