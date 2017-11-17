import React from "react";
import {IndexRoute, Route} from "react-router";

import App from "./containers/App";
import HomePage from "./containers/HomePage";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="*" component={() => <h1> Not found! </h1>}/>
    </Route>
);