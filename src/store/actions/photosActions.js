import ACTION_TYPES from "./actionTypes";

//* Get all
export const getAlbumPhotosAction = (payload) => ({
  type: ACTION_TYPES.GET_ALBUM_PHOTOS_ACTION,
  payload
});
export const getAlbumPhotosRequest = () => ({
  type: ACTION_TYPES.GET_ALBUM_PHOTOS_REQUEST
});
export const getAlbumPhotosSuccess = (payload) => ({
  type: ACTION_TYPES.GET_ALBUM_PHOTOS_SUCCESS,
  payload
});
export const getAlbumPhotosError = (payload) => ({
  type: ACTION_TYPES.GET_ALBUM_PHOTOS_ERROR,
  payload
});