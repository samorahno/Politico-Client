import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/nav/Header';
import Footer from '../components/nav/Footer';
import Landing from '../components/landing/landing';
import ViewOffice from '../components/dashboard/viewoffice';

const Routes = () => (
    <Router>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/view" component={ViewOffice}/>
        {/* <Route exact path="/side" component={DashboardSidebar}/> */}
        <Footer />
    </Router>
);

export default Routes;
