import React from 'react';
import '../../styles/dashboard.css';
import Header from '../nav/DashboardHeader';
import Footer from '../nav/DashboardFooter';
import SideBar from '../nav/DashboardSidebar';

const Office = () => {
    return (
        <div>
            <Header />
            <SideBar />
            <div className="main-content">
                <div className="title">
					home /
                </div>

                <div className="main">

                    <div className="widget widget_table" style={{ overflow: 'auto' }}>
                        <div className="title heado">Political Offices List</div>

                        <div className="widget_stat widget_stat_table">
                            <div style={{ overflow: 'auto' }}>
                                <table style={{ overflow: 'scroll' }}>
                                    <thead>
                                        <tr>
                                            <th>S/N</th>
                                            <th>Name</th>
                                            <th>Type</th>


                                        </tr>
                                    </thead>

                                    <tbody id="officeContainer">
                                        <tr>
                                            <td>A</td>
                                            <td>B</td>
                                            <td>C</td>
                                        </tr>
                                        <tr>
                                            <td>A</td>
                                            <td>B</td>
                                            <td>C</td>
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

export default Office;
