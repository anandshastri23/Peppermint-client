import initialState from "./initialState";
import * as types from "../actionTypes";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RECEIVE_RESPONSE:
            return state.set("data", action.data);
        default:
            return state;
    }
}

export default reducer;
