import { SELECTED_USER } from '../constants/ActionTypes';
import { ReducerAction } from '../types';

interface GeneralReducer {
    selectedUser: any
}

const INITIAL_STATE = {
    selectedUser: {}
};

export default (state: GeneralReducer = INITIAL_STATE, action: ReducerAction) => {
    switch (action.type) {
        case SELECTED_USER: {
            return { ...state, selectedUser: action.payload };
        }
        default:
            return state;
    }
};
