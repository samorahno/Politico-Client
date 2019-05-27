import React from 'react';
import '../../styles/dashboard.css';
import Header from '../nav/DashboardHeader';
import Footer from '../nav/DashboardFooter';
import SideBar from '../nav/DashboardSidebar';

const Vote = () => {
    return (
        <div>
            <Header />
            <SideBar />
            <div className="main-content">
                <div className="title">
					vote /
                </div>

                <div className="main">


                    <div className="widget widget_table" style={{ overflow: 'auto' }}>
                        <div className="title heado">Vote a Political Party Candidate</div>
                        <div className="widget_stat widget_stat_table">
                            <div className = "success-msg" id = "success-msg" />
                            <div className = "warning-msg" id = "warning-msg" />
                            <div className = "error-msg" id = "error-msg" />
                            <div className = "info-msg" id = "info-msg" />
                            <div style={{ overflow: 'auto' }}>
                                <form action="#" method="GET">
                                    <table style={{ overflow: 'scroll' }}>
                                        <thead>
                                            <tr>
                                                <th>Office</th>
                                                <th>Candidate</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="input-group">
                                                        <select id="officeList" name="offices">
                                                            <option value="">Select an office</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-group">
                                                        <select id="candidateList" name="candidates">
                                                            <option value="name1">Candidates</option>
                                                        </select>
                                                    </div>
                                                </td>

                                            </tr>

                                        </tbody>
                                    </table>
                                    <button className="btn btnmore" id="voteButton">Vote</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default Vote;
