import {fork} from "redux-saga/effects";
import watchGetResponse from "./watcher";

export default function* startForeman(){
    yield fork(watchGetResponse);
}