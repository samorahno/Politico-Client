
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import { loginUser, clearAuthError } from '../../actions';
import ToastMessage from '../common/ToastMessage';
import '../../styles/landing.scss';


export class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
        this.modal = React.createRef();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.errorHandler = this.errorHandler.bind(this);
    }

    closeModal (e) {
        document.getElementById('myModal').style.display = 'none';
    }


    onChange (e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    redirectUser () {
        const { history } = this.props;
        history.push('/dashboard');
    }

    errorHandler () {
        const { clearError } = this.props;
        clearError();
    }


    onSubmit (e) {
        e.preventDefault();
        const { login } = this.props;
        const user = {
            email: this.state.email,
            password: this.state.password
        };
        login(user);
    }
    render () {
        const { userData } = this.props;
        if (userData) {
            if (userData.isAuthenticated) {
                toast(<ToastMessage message="Login Successful. Redirecting....." />, {
                    type: 'success',
                    closeButton: false,
                    onClose: () => this.redirectUser(),
                    hideProgressBar: true,
                    autoClose: 0
                });
            }

            if (userData.authError) {
                toast(<ToastMessage message={userData.message.message} />, {
                    type: 'error',
                    closeButton: false,
                    hideProgressBar: true,
                    autoClose: 5000
                });
            }
        }
        return (
            <div className="Landing">
                <div ref={this.modal} id="myModal" className="modall" style={{ display: this.props.showModal ? 'block' : 'none' }}>

                    <div className="modal-contentl">
                        <span className="closel" onClick={this.closeModal}>&times;</span>
                        <form className="form-modall ddl validatel" onSubmit={this.onSubmit}>
                            <h1>Login</h1>
                            <div className = "success-msgl" id = "success-msg-loginl" />
                            <div className = "warning-msgl" id = "warning-msg-loginl" />
                            <div className = "error-msgl" id = "error-msg-loginl" />
                            <div className = "info-msgl" id = "info-msg-loginl" />
                            <div className="input-groupl">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    id="loginemail"
                                    value = {this.state.email}
                                    onChange = {this.onChange}
                                    onFocus = {this.errorHandler}
                                    required />
                            </div>
                            <div className="input-groupl">
                                <label>Password</label>
                                <input
                                    type = "password"
                                    name="password"
                                    placeholder="Password"
                                    id="loginpassword"
                                    minLength="5"
                                    maxLength="50"
                                    value = {this.state.password}
                                    onChange = {this.onChange}
                                    onFocus = {this.errorHandler}
                                    required
                                />
                            </div>

                            <div className="input-groupl">
                                <button type="submit" name="submit" className="btnl" id="loginbtn" >Login</button>
                                <a href="sample.html" id="myBtn3">
                                    <p className="fpl">forgot password?</p>
                                </a>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    login: loginUser,
    clearError: clearAuthError
};

export const mapStateToProps = (state) => ({
    userData: state.auth
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
