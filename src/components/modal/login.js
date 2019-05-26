
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';
import '../../styles/landing.css';

class Login extends Component {
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
    }

    closeModal (e) {
        document.getElementById('myModal').style.display = 'none';
    }


    onChange (e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    async onSubmit (e) {
        e.preventDefault();
        const { login } = this.props;
        const user = {
            email: this.state.email,
            password: this.state.password
        };
        const res = await login(user);
        console.log(res);
    }

    render () {
        return (
            <div>
                <div ref={this.modal} id="myModal" className="modal" style={{ display: this.props.showModal ? 'block' : 'none' }}>

                    <div className="modal-content">
                        <span className="close" onClick={this.closeModal}>&times;</span>
                        <form className="form-modal dd validate" onSubmit={this.onSubmit}>
                            <h1>Login</h1>
                            <div className = "success-msg" id = "success-msg-login" />
                            <div className = "warning-msg" id = "warning-msg-login" />
                            <div className = "error-msg" id = "error-msg-login" />
                            <div className = "info-msg" id = "info-msg-login" />
                            <div className="input-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    id="loginemail"
                                    value = {this.state.email}
                                    onChange = {this.onChange}
                                    required />
                            </div>
                            <div className="input-group">
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
                                    required
                                />
                            </div>

                            <div className="input-group">
                                <button type="submit" name="submit" className="btn" id="loginbtn" >Login</button>
                                <a href="sample.html" id="myBtn3">
                                    <p className="fp">forgot password?</p>
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
    login: loginUser
};
export default connect(null, mapDispatchToProps)(Login);
