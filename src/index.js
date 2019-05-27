import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import Routes from './routes';
import configStore from './store/configure-store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const store = configStore();
const app = (
    <Provider store = {store}>
        <Routes />
        <ToastContainer
            position="top-center"
            hideProgressBar
            closeButton={false}
            autoClose={200}
        />
    </Provider>
);


ReactDOM.render(app, document.getElementById("root"));
