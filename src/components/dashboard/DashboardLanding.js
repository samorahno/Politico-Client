import React from 'react';
import '../../styles/dashboard.css';
import Header from '../nav/DashboardHeader';
import Footer from '../nav/DashboardFooter';
import SideBar from '../nav/DashboardSidebar';
import defaultImage from '../../images/Anonymous.jpg';
import DashboardStatComponent from '../common/dashboardstat';
import ProfileCard from '../common/profileCard';

const DashboardLanding = () => {
    return (
        <div>
            <Header />
            <SideBar />
            <div className="main-content">
                <div className="title">
					home /
                </div>

                <div className="main">
                    <DashboardStatComponent count="5" title="Citizens" />
                    <DashboardStatComponent count="8" title="Politicians" />
                    <DashboardStatComponent count="8" title="Vote Count" />
                </div>

                <main className="cards">
                    <ProfileCard image={defaultImage} name="Wale Ojopppp" office="National Assembly Member" party="PDP"/>
                    <ProfileCard image={defaultImage} name="Ahmed Mark" office="National Assembly Member" party="APC"/>
                    <ProfileCard image={defaultImage} name="Bimbo Ali" office="National Assembly Member" party="AD"/>
                    <ProfileCard image={defaultImage} name="Tolu Oni" office="National Assembly Member" party="LP"/>
                    <ProfileCard image={defaultImage} name="Tola Odeyemi" office="Legislative Council Member" party="PDP"/>
                </main>
            </div>
            <Footer />
			 </div>
    );
};

export default DashboardLanding;
