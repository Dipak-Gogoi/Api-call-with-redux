import { ActionTypes } from "../contants/actionType";

export const setDatas = (datas) => {
    return {
        type: ActionTypes.SET_DATA,
        payload: datas,
    };
};

export const selectedData = (data) => {
    return {
        type: ActionTypes.SELECTED_DATA,
        payload: data,
    };
};
