import React, { Component } from 'react';
import Login from '../modal/login.js';
import Signup from '../modal/signup.js';
import { Link } from 'react-router-dom';
import '../../styles/landing.scss';
import Header from '../nav/Header';
import Footer from '../nav/Footer';

class Landing extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showSignupModal: false,
            showLoginModal: false
        };
    }
    isSignupModal () {
        this.setState({
            showSignupModal: !this.state.showSignupModal
        });
    }
    isLoginModal (e) {
        this.setState({
            showLoginModal: !this.state.showLoginModal
        });
    }
    render () {
        return (
            <div>
                <div className="Landing" style={{ backgroundColor: 'white' }}>
                    <Header />

                    <div id="showcasel" className="gridl">

                        <h1 className="whitel">Welcome to Politico</h1>
                        <p className="header-line2l">...your vote is your right...</p>
                        <Link to="#" className="btnlanding" id="myBtn" onClick={this.isLoginModal.bind(this)}>Login</Link>
                        {"  "}
                        <Link
                            to="#"
                            className="btnlanding"
                            id="myBtn2"
                            onClick={this.isSignupModal.bind(this)}
                        >Sign Up</Link>

                        <div className="headline_introl"> <span>
                            <center><b>About Politico</b></center> <br />
                        Politico is a platform that enables citizens give their mandate to politicians running different
                        government offices while building trust in the process through transparency.
                        </span>

                        </div>

                    </div>

                    <div className="container8l" style={{ backgroundColor: 'white' }}>
                        <span style={{ width: '100%' }}>
                            <p style={{ width: '100%' }}>The simple steps to
            follow is shown below:</p>
                        </span>
                        <section className="step-indicator8l">

                            <div className="step8l step1l">
                                <div className="step-icon8l">1</div>

                            </div>
                            <div className="indicator-line8l" />
                            <div className="step8l step2l">
                                <div className="step-icon8l">2</div>

                            </div>
                            <div className="indicator-line8l" />
                            <div className="step8l step3l">
                                <div className="step-icon8l">3</div>

                            </div>
                        </section>
                    </div>


                    <div className="stepsl mtl">
                        <div className="columnl stepl">
                            <p className="section-textl">
                            Create an account and login as a user to have access to view voting parameters.
                            </p>
                        </div>
                        <div className="columnl stepl">
                            <p className="section-textl">
                            Vote any political party of your choice by selecting the party and your favorite candidate
                            </p>
                        </div>
                        <div className="columnl stepl">
                            <p className="section-textl">
                            You can view the results of the election just by clicking the view result button.
                            </p>

                            <Login showModal={this.state.showLoginModal} />
                            <Signup showModal={this.state.showSignupModal} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Landing;
