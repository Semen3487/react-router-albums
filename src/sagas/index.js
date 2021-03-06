import { takeLatest } from 'redux-saga/effects';

import ACTION_TYPES from '../store/actions/actionTypes';
import { 
  createUserSaga, 
  deleteUserSaga, 
  receiveAllUsersSaga, 
  receiveUserSaga, 
  updateUserSaga
} from './usersSagas';


function* rootSaga(){
  yield takeLatest(ACTION_TYPES.GET_USERS_ACTION, receiveAllUsersSaga);
  yield takeLatest(ACTION_TYPES.GET_USERS_ACTION, receiveUserSaga);
  yield takeLatest(ACTION_TYPES.POST_USER_ACTION, createUserSaga);
  yield takeLatest(ACTION_TYPES.PUT_USER_ACTION, updateUserSaga);
  yield takeLatest(ACTION_TYPES.DELETE_USER_ACTION, deleteUserSaga);
};

export default rootSaga;