import React from 'react';
import '../../styles/dashboard.css';
import Header from '../nav/DashboardHeader';
import Footer from '../nav/DashboardFooter';
import SideBar from '../nav/DashboardSidebar';

const CandidateRequest = () => {
    return (
        <div>
            <Header />
            <SideBar />
            <div className="main-content">
                <div className="title">
					&nbsp;
                </div>

                <div className="main">

                    <div className="widget widget_table" style={{ overflow: 'auto' }}>
                        <div className="title heado">Candidate Request List</div>

                        <div className="widget_stat widget_stat_table">
                            <div style={{ overflow: 'auto' }}>
                                <table style={{ overflow: 'scroll' }}>
                                    <thead >
                                        <tr>
                                            <th>S/N</th>
                                            <th>Candidate</th>
                                            <th>Office</th>
                                            <th>Date Created</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody id="interestContainer">
                                        <tr>
                                            <td>1</td>
                                            <td>A</td>
                                            <td>B</td>
                                            <td>C</td>
                                            <td>D</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>A</td>
                                            <td>B</td>
                                            <td>C</td>
                                            <td>D</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>

    );
};

export default CandidateRequest;
