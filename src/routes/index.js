import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Header from '../components/nav/Header';
// import Footer from '../components/nav/Footer';
import Landing from '../components/landing/landing';
import ViewOffice from '../components/dashboard/viewoffice';
import DashboardLanding from '../components/dashboard/DashboardLanding';
import Office from '../components/dashboard/Office';

const Routes = () => (
    <Router>
        <Route exact path="/" component={DashboardLanding} />
        <Route exact path="/office" component={Office} />
        <Route exact path="/home" component={Landing} />
        <Route exact path="/view" component={ViewOffice}/>
        {/* <Route exact path="/side" component={DashboardSidebar}/> */}
    </Router>
);

export default Routes;
