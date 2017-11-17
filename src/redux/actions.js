import * as types from "./actionTypes";

export const receivedResponseData = (data) => ({
    type: types.RECEIVE_RESPONSE,
    data: data
});

export const getResponseData = (data) => ({
    type: types.GET_RESPONSE,
    data: data
});