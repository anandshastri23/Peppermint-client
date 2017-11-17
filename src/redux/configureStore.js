import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {routerMiddleware} from "react-router-redux";

import rootReducer from "./reducers/reducer"
import rootSaga from "./sagas";

const configureStore = (browserHistory) => {
    const sagaMiddleware = createSagaMiddleware();
    const routingMiddleware = routerMiddleware(browserHistory);
    return {
        ...createStore(rootReducer,
            applyMiddleware(sagaMiddleware,routingMiddleware)),
            runSaga: sagaMiddleware.run(rootSaga)
         };
    };

export default configureStore;