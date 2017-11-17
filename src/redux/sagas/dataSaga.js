import {call, put} from "redux-saga/effects";
import {push} from "react-router-redux";

import {getResponseData} from "../../api";
import {receivedResponseData} from "../actions";

export function* getResponseSaga({data}) {
    try {
        let response = yield call(getResponseData, data);
        yield put(receivedResponseData(response.data));
        yield put(push('/data'));
    }catch(e) {
        alert("Error:" +e.message);
    }
}