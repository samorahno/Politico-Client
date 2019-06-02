
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import ToastMessage from '../common/ToastMessage';
import { signupUser } from '../../actions';
import '../../styles/landing.scss';

// const baseUrlSignup = 'https://samson-politico.herokuapp.com/api/v1/';
export class Signup extends Component {
    constructor (props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
            password_confirm: '',
            error: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    closeModal (e) {
        document.getElementById('myModal2').style.display = 'none';
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    redirectUser () {
        const { history } = this.props;
        history.push('/dashboard');
    }


    async onSubmit (e) {
        e.preventDefault();
        var newUser = {
            firstname: this.state.firstName,
            lastname: this.state.lastName,
            email: this.state.email,
            phone: this.state.phoneNumber,
            password: this.state.password,
            confirmPassword: this.state.password_confirm

        };
        const { signup } = this.props;
        const isAuthenticated = await signup(newUser);
        if (!isAuthenticated.payload.status) {
            toast(<ToastMessage message="Registration Successful. Redirecting....." />, {
                type: 'success',
                closeButton: false,
                onClose: () => this.redirectUser(),
                hideProgressBar: true,
                autoClose: 0
            });
        } else {
            toast(<ToastMessage message={isAuthenticated.payload.error || isAuthenticated.payload.message} />, {
                type: 'error',
                closeButton: false,
                hideProgressBar: true,
                autoClose: 5000
            });
        }
    }
    render () {
        const { error } = this.state.error;
        return (
            <div>
                <div id="myModal2" className="modall" style={{ display: this.props.showModal ? 'block' : 'none' }}>

                    <div className="modal-contentl" id="modalcontent">
                        <span className="closel" onClick = {this.closeModal} >&times;</span>

                        <form className="form-modall ddl" onSubmit={this.onSubmit}>
                            <h1>Signup</h1>
                            <div className = "success-msg" id = "success-msg" />
                            <div className = "warning-msg" id = "warning-msg" />
                            <div className = "error-msg" id = "error-msg" />
                            <div className = "info-msg" id = "info-msg" />
                            {error && (<div className="error-msgl">{error}</div>)}
                            <div className="input-groupl">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    id="firstname"
                                    value={this.state.firstName}
                                    onChange={this.onChange}
                                />

                            </div>
                            <div className="input-groupl">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    id="lastname"
                                    value={this.state.lastName}
                                    onChange={this.onChange}
                                />

                            </div>
                            <div className="input-groupl">
                                <label>E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="E-mail"
                                    id="signupemail"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="input-groupl">
                                <label>Phone Number</label>
                                <input
                                    type="number"
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    id="phonenumber"
                                    value={this.state.phoneNumber}
                                    onChange={this.onChange}
                                />
                            </div>
                            <label style={{ width: '33%' }}>Password / </label><label style={{ width: '33%' }}>Confirm Password</label>
                            <div className="input-groupl">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    id="signuppassword"
                                    style={{ width: '33%' }}
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                                <input
                                    type="password"
                                    name="password_confirm"
                                    placeholder="Confirm Password"
                                    id="confirmsignuppassword"
                                    style={{ width: '33%' }}
                                    value={this.state.password_confirm}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="input-groupl">
                                <button type="submit" name="submit" className="btnl" id="signupbtn">Register</button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    signup: signupUser
};

export const mapStateToProps = (state) => ({
    userData: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signup));
