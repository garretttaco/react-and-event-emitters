import * as types from "./action-types";

export const showModal = modalOptions => ({
  type: types.SHOW_MODAL,
  modalOptions
});

export const hideModal = () => ({ type: types.HIDE_MODAL });

export const redirect = to => ({ type: types.REDIRECT, to });
