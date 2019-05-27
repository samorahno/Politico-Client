import React from 'react';
import '../../styles/dashboard.css';
import Header from '../nav/DashboardHeader';
import Footer from '../nav/DashboardFooter';
import SideBar from '../nav/DashboardSidebar';
import defaultPix from '../../images/Anonymous.jpg';

const Profile = () => {
    return (
        <div>
            <Header />
            <SideBar />
            <div className="main-content">
                <div className="title" />

                <div className="main">
                    <div className="widget widget_table" style={{ overflow: 'auto' }}>
                        <div className="title heado">User Profile</div>
                        <div className="widget_stat widget_stat_table">
                            <div style={{ overflow: 'auto' }}>
                                <table style={{ overflow: 'scroll' }}>
                                    <tr>
                                        <td colSpan="2"><img src={defaultPix} alt="User Image" className="userimage" /></td>

                                    </tr>

                                    <tr>
                                        <td>Name</td>
                                        <td>Kikelomo Folagbade</td>
                                    </tr>

                                    <tr>
                                        <td>Email</td>
                                        <td>samabos007@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Phone</td>
                                        <td>07036463311</td>
                                    </tr>
                                    <tr>
                                        <td>Joined On</td>
                                        <td>20 - 01 - 2019</td>
                                    </tr>

                                </table>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="main votesize" >
                    <div className="widget">
                        <div className="title heado">Vote Count</div>
                        <div className="widget_stat">
                            <div className="widget_stat1">
                                <i className="fa  fa-check-circle-o" />
                            </div>
                            <div className="widget_stat2">
						3
                            </div>
                        </div>
                    </div>

                </div>


                <div className="main">
                    <div className="widget widget_table" style={{ overflow: 'auto' }}>
                        <div className="title heado">Vote History</div>
                        <div className="widget_stat widget_stat_table">
                            <div className="overflo">
                                <table>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Voted for</th>
                                        <th>Party</th>
                                        <th>Office</th>
                                        <th>Date</th>

                                    </tr>

                                    <tr >
                                        <td>1</td>
                                        <td>Wale Ojo</td>
                                        <td>PDP</td>
                                        <td>National Assembly Member</td>
                                        <td>23-01-2019</td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td>Tola Odeyemi</td>
                                        <td>PDP</td>
                                        <td>Legislative Council Member</td>
                                        <td>23-01-2019</td>
                                    </tr>

                                    <tr >
                                        <td>3</td>
                                        <td>Goke Talabi</td>
                                        <td>PDP</td>
                                        <td>Local Government Chairman</td>
                                        <td>23-01-2019</td>
                                    </tr>


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

export default Profile;
