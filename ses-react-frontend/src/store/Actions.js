import {
  ADD_PRODUCT,
  ADD_TAB,
  ADD_TAB2,
  Edit_PRODUCT,
  REMOVE_TAB,
  REMOVE_TAB2,
  Remove_PRODUCT,
  UPDATE_NAME_TAB,
  UPDATE_NAME_TAB2,
  UPDATE_STATUS,
  UPDATE_STATUS2,
} from "./Constants";

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});
export const removeProduct = (payload) => ({
  type: Remove_PRODUCT,
  payload,
});
export const editProduct = (payload) => ({
  type: Edit_PRODUCT,
  payload,
});
export const addtab = (payload) => ({
  type: ADD_TAB,
  payload,
});
export const removetab = (payload) => ({
  type: REMOVE_TAB,
  payload,
});
export const updatestatus = (payload) => ({
  type: UPDATE_STATUS,
  payload,
});
export const updatenametab = (payload) => ({
  type: UPDATE_NAME_TAB,
  payload,
});
export const addtab2 = (payload) => ({
  type: ADD_TAB2,
  payload,
});
export const removetab2 = (payload) => ({
  type: REMOVE_TAB2,
  payload,
});
export const updatestatus2 = (payload) => ({
  type: UPDATE_STATUS2,
  payload,
});
export const updatenametab2 = (payload) => ({
  type: UPDATE_NAME_TAB2,
  payload,
});
