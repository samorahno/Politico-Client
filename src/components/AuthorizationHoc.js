import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from '../config/axiosConfig';


const AuthorizationHOC = ({ component: Component, ...rest }) => {
    const token = rest.auth ? rest.auth.token : null;
    const isAdmin = rest.auth.user ? rest.auth.user.isAdmin : null;
    return (
        <Route
            {...rest}
            render={() => {
                if (token) {
                    axios.defaults.headers.common['x-access-token'] = token;
                    return <Component isAdmin={isAdmin}/>;
                }
                return <Redirect to="/" />;
            }}
        />);
};

const mapStateToProps = (state) => ({
    auth: state.auth
});
export default connect(mapStateToProps)(AuthorizationHOC);
