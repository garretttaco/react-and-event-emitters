import { combineReducers } from "redux";
import { REDIRECT, SHOW_MODAL, HIDE_MODAL } from "./action-types";

const initialState = {
  modalOptions: {
    show: false
  },
  redirect: {
    to: null
  }
};

function events(state = initialState, action) {
  switch (action.type) {
    case REDIRECT:
      return { ...state, redirect: { to: action.to } };

    case SHOW_MODAL:
      return { ...state, modalOptions: { ...action.modalOptions, show: true } };

    case HIDE_MODAL:
      return { ...state, modalOptions: { show: false } };

    default:
      return state;
  }
}

const rootReducer = combineReducers({ events });

export default rootReducer;
