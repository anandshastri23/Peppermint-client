import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router} from "react-router";
import Provider from "react-redux/es/components/Provider";
import "./index.css";
import routes from "./routes";
import configureStore from "./redux/configureStore";

const store = configureStore(browserHistory);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);