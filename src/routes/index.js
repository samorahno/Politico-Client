import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Header from '../components/nav/Header';
// import Footer from '../components/nav/Footer';
import Landing from '../components/landing/landing';
import ViewOffice from '../components/dashboard/viewoffice';
import DashboardLanding from '../components/dashboard/DashboardLanding';
import Office from '../components/dashboard/Offices';
import OfficeAdmin from '../components/dashboard/Offices-Admin';
import PartiesAdmin from '../components/dashboard/Parties-Admin';
import Parties from '../components/dashboard/Parties';
import CandidateRequest from '../components/dashboard/CandidateRequest';
import Vote from "../components/dashboard/Vote";
import Profile from '../components/dashboard/Profile';
import VoteResult from '../components/dashboard/VoteResult';

const Routes = () => (
    <Router>
        <Route exact path="/dashboard" component={DashboardLanding} />
        <Route exact path="/office" component={Office} />
        <Route exact path="/office-admin" component={OfficeAdmin} />
        <Route exact path="/party-admin" component={PartiesAdmin} />
        <Route exact path="/parties" component={Parties} />
        <Route exact path="/candidate" component={CandidateRequest} />
        <Route exact path="/result" component={VoteResult} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/vote" component={Vote} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/view" component={ViewOffice}/>
        {/* <Route exact path="/side" component={DashboardSidebar}/> */}
    </Router>
);

export default Routes;
