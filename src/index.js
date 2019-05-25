import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/nav/Header';
import Footer from './components/nav/Footer';
import Landing from './components/landing/landing';
import viewoffice from './components/dashboard/viewoffice';
import './styles/landing.css';

class Welcome extends React.Component {
    render () {
        return (
            <div>
                <Router>
                    <div className="App">
                        <Header />
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/view" component={viewoffice}/>
                        <Footer />
                    </div>
                </Router>

            </div>
        );
    }
}
ReactDOM.render(<Welcome />, document.getElementById("root"));
