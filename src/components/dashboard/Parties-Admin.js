import React from 'react';
import '../../styles/dashboard.css';
import Header from '../nav/DashboardHeader';
import Footer from '../nav/DashboardFooter';
import SideBar from '../nav/DashboardSidebar';

const PartiesAdmin = () => {
    return (
        <div>
            <Header />
            <SideBar />
            <div className="main-content">
                <div className="title">
					parties /
                </div>

                <div className="main">


                    <div className="widget widget_table" style={{ overflow: 'auto' }}>
                        <div className="title heado">Create New Political Party</div>
                        <div className="widget_stat widget_stat_table">
                            <div className = "success-msg" id = "success-msg" />
                            <div className = "warning-msg" id = "warning-msg" />
                            <div className = "error-msg" id = "error-msg" />
                            <div className = "info-msg" id = "info-msg" />
                            <div style={{ overflow: 'auto' }}>
                                <form action="#" method="GET">

                                    <div className="input-group">

                                        <label>Party Name</label>
                                        <input type="text" name="partyname" placeholder="Party Name" id="partyName" />

                                    </div>
                                    <div className="input-group">

                                        <label>Abbreviation</label>
                                        <input type="text" name="partyname" placeholder="Party Initials (APC,PDP)" id="partyAbbreviation" />

                                    </div>
                                    <div className="input-group">

                                        <label>HQ Address</label>
                                        <input type="text" name="partyaddress" placeholder="Head Quarters Address" id="hqAddress" />

                                    </div>
                                    <div className="input-group">
                                        <label>Party Logo</label>
                                        <input type="text" name="partyLogo" placeholder="https://imagelogourl.com/image.jpg" accept="image/gif, image/png, image/jpeg" id="partyLogo" />
                                    </div>


                                    <div className="input-group">
                                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <button type="submit" name="submit" className="btn" id="createPartyBtn">Create Party</button>
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
                                            <th>Head Quarters</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody id="officeContainer">
                                        <tr>
                                            <td>A</td>
                                            <td>B</td>
                                            <td>C</td>
                                            <td>D</td>
                                        </tr>
                                        <tr>
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

export default PartiesAdmin;
