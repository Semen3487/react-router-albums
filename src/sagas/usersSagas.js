import { put } from "redux-saga/effects";
import { 
  createUserError,
  createUserRequest,
  createUserSuccess,
  deleteUserError,
  deleteUserRequest,
  deleteUserSuccess,
  receiveAllUsersError, 
  receiveAllUsersRequest, 
  receiveAllUsersSuccess,
  receiveUserError,
  receiveUserRequest,
  receiveUserSuccess,
  updateUserError,
  updateUserRequest,
  updateUserSuccess
} from "../store/actions/usersActions";

import dataService from '../data-service';


export function* receiveAllUsersSaga(){
  yield put(receiveAllUsersRequest());
  try {
    const users = yield dataService.get('/users')
      .then(({data}) => data);
    yield put(receiveAllUsersSuccess(users));
  } catch (error) {
    yield put(receiveAllUsersError(error));
  }
};

export function* receiveUserSaga(){
  yield put(receiveUserRequest());
  try {
    const user = yield dataService.get('/users/')
      .then(({data}) => data);
    yield put(receiveUserSuccess(user));
  } catch (error) {
    yield put(receiveUserError(error));
  }
};

export function* createUserSaga(payload){
  yield put(createUserRequest());
  try {
    const newUser = yield dataService.post('/users', payload)
      .then(({data}) => data);
    yield put(createUserSuccess(newUser));
  } catch (error) {
    yield put(createUserError(error));
  }
};

export function* updateUserSaga(payload){
  yield put(updateUserRequest());
  try {
    const updateUser = yield dataService.put(`/users/${payload.id}`, payload)
      .then(({data}) => data);
    yield put(updateUserSuccess(updateUser));
  } catch (error) {
    yield put(updateUserError(error));
  }
};

export function* deleteUserSaga(payload){
  yield put(deleteUserRequest());
  try {
    yield dataService.delete(`/users/${payload}`)
      .then(({data}) => data);
    yield put(deleteUserSuccess(payload));
  } catch (error) {
    yield put(deleteUserError(error));
  }
};