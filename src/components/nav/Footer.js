import React from 'react';
import '../../styles/landing.scss';

const Footer = () => {
    return (
        <div>
            <footer className="steps footercolor">
                <div className="column step">
                    <table className="footer-table">
                        <tbody>
                            <tr>
                                <td><span className="footer-td">
                                    <p><i className="fa fa-phone" /> : +2348060955366 <br /> <i className="fa fa-map-marker" /> : 28,
                                        Adewale Street, Victoria Island, Lagos, Nigeria <br /><i className="fa fa-envelope" /> :
                                        samabos007@gmail.com
                                    </p>
                                </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="column step">
                    <p>
                        Politico | by Abosede Samson &copy; 2019
                    </p>
                    <p />
                </div>
            </footer>
        </div>
    );
};

export default Footer;
