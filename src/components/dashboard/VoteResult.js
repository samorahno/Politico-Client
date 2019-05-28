import React from 'react';
import '../../styles/dashboard.css';
import Header from '../nav/DashboardHeader';
import Footer from '../nav/DashboardFooter';
import SideBar from '../nav/DashboardSidebar';

const VoteResult = () => {
    return (
        <div>
            <Header />
            <SideBar />
            <div className="main-content">
                <div className="title" />

                <div className="main">
                    <div className="widget widget_table" style={{ overflow: 'auto' }}>
                        <div className="title heado">Vote Results</div>
                        <div className="widget_stat widget_stat_table">
                            <form action="#" method="GET">
                                <div style={{ overflow: 'auto' }}>
                                    <table style={{ overflow: 'scroll' }}>
                                        <thead>
                                            <tr>

                                                <th>Office</th>
                                                <th>Result</th>

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
                                                    <ul className="voteresult" id="voteResult">
                                                        <li>Sola Adewale PDP - 234</li>
                                                        <li>Bimbo Odukoya ANP - 112</li>
                                                        <li>Sola Adewale PDP - 234</li>
                                                        <li>Bimbo Odukoya ANP - 112</li>
                                                    </ul>
                                                </td>

                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
            <Footer />
        </div>

    );
};

export default VoteResult;
