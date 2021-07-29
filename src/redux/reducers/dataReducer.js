import { ActionTypes } from "../contants/actionType";

const initialState = {
    datas: []
};

export const dataReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_DATA:
            return { ...state, datas: payload };
        default:
            return state;
    };
};

export const selectedDataReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_DATA:
            return { ...state, ...payload };
        default:
            return state;
    };
};