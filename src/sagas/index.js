import { takeLatest } from 'redux-saga/effects';

import ACTION_TYPES from '../store/actions/actionTypes';
import { getAllAlbumsSaga } from './albumsSaga';
import { getAlbumPhotosSaga } from './photosSaga';
import { 
  createUserSaga, 
  deleteUserSaga, 
  getAllUsersSaga, 
  // receiveUserSaga, 
  updateUserSaga
} from './usersSagas';


function* rootSaga(){
  yield takeLatest(ACTION_TYPES.GET_USERS_ACTION, getAllUsersSaga);
  // yield takeLatest(ACTION_TYPES.GET_USERS_ACTION, receiveUserSaga);
  yield takeLatest(ACTION_TYPES.POST_USER_ACTION, createUserSaga);
  yield takeLatest(ACTION_TYPES.PUT_USER_ACTION, updateUserSaga);
  yield takeLatest(ACTION_TYPES.DELETE_USER_ACTION, deleteUserSaga);
  // albums
  yield takeLatest(ACTION_TYPES.GET_ALBUMS_ACTION, getAllAlbumsSaga);
  // album photos
  yield takeLatest(ACTION_TYPES.GET_ALBUM_PHOTOS_ACTION, getAlbumPhotosSaga);
};

export default rootSaga;