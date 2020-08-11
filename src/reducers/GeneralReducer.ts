import { ReducerAction } from '../types';
import { SET_NEW_DATA, FINISHED_LOAD_DATA } from '../constants/ActionTypes';

interface GeneralReducer {
  contactsData: any
}

const INITIAL_STATE = {
  contactsData: [],
  loadDataFinished: false
};

export default (state: GeneralReducer = INITIAL_STATE, action: ReducerAction) => {
  switch (action.type) {

    case SET_NEW_DATA: {
      return { ...state, contactsData:[...state.contactsData, action.payload]};
    }
    case FINISHED_LOAD_DATA: {
      return { ...state, loadDataFinished: action.payload};
    }
    default:
      return state;
  }
};
