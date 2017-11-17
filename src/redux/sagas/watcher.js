import {takeLatest} from "redux-saga/effects";

import * as types from "../actionTypes";
import {getResponseSaga} from "./dataSaga";

export default function* watchGetResponse(){
    yield takeLatest(types.GET_RESPONSE, getResponseSaga);
}