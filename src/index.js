import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import Routes from './routes';
import configStore from './store/configure-store';
const store = configStore();
const app = (
    <Provider store = {store}>
        <Routes />
    </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
