import React from 'react';
import '../../styles/dashboard.css';
import Header from '../nav/DashboardHeader';
import Footer from '../nav/DashboardFooter';
import SideBar from '../nav/DashboardSidebar';

const OfficeAdmin = () => {
    return (
        <div>
            <Header />
            <SideBar />
            <div className="main-content">
                <div className="title">
					office /
                </div>

                <div className="main">


                    <div className="widget widget_table" style={{ overflow: 'auto' }}>
                        <div className="title heado">Create New Political Office</div>
                        <div className="widget_stat widget_stat_table">
                            <div className = "success-msg" id = "success-msg" />
                            <div className = "warning-msg" id = "warning-msg" />
                            <div className = "error-msg" id = "error-msg" />
                            <div className = "info-msg" id = "info-msg" />
                            <div style={{ overflow: 'auto' }}>
                                <form action="#" method="GET">

							 <div className="input-group">

								 <label>Office Name</label>
								 <input type="text" name="officename" placeholder="Office Name" id="officeName" />
							 </div>
                                    <div className="input-group">
                                        <label>Office Type</label>
                                        <select id="officeType" name="type">
								  <option value="">Select office type</option>
								  <option value="federal">Federal Government</option>
								  <option value="legislative">Legislative Government</option>
								  <option value="state">State Government</option>
								  <option value="local">Local government</option>
                                        </select>
                                    </div>

                                    <div className="input-group">
                                        <label>&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;</label>
                                        <button
                                            type="submit"
                                            name="submit"
                                            className="btn"
                                            id="officeBtn"
                                        >Create Office</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main">
                    <div className="widget widget_table" style={{ overflow: 'auto' }}>
                        <div className="title heado">Political Parties List</div>

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

export default OfficeAdmin;
