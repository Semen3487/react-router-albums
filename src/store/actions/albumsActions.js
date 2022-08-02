import ACTION_TYPES from "./actionTypes";

//* Get all
export const getAllAlbumsAction = () => ({
  type: ACTION_TYPES.GET_ALBUMS_ACTION
});
export const getAllAlbumsRequest = () => ({
  type: ACTION_TYPES.GET_ALBUMS_REQUEST
});
export const getAllAlbumsSuccess = (payload) => ({
  type: ACTION_TYPES.GET_ALBUMS_SUCCESS,
  payload
});
export const getAllAlbumsError = (payload) => ({
  type: ACTION_TYPES.GET_ALBUMS_ERROR,
  payload
});