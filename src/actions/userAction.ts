import {
    SELECTED_USER
} from '../constants/ActionTypes';


export const setSelectedUser = (user: boolean) => (dispatch: any) => {
    dispatch({
        type: SELECTED_USER,
        payload: user
    });
};
