import { put } from "redux-saga/effects";
import { 
  createUserError,
  createUserRequest,
  createUserSuccess,
  deleteUserError,
  deleteUserRequest,
  deleteUserSuccess,
  getAllUsersError, 
  getAllUsersRequest, 
  getAllUsersSuccess,
  // receiveUserError,
  // receiveUserRequest,
  // receiveUserSuccess,
  updateUserError,
  updateUserRequest,
  updateUserSuccess
} from "../store/actions/usersActions";

import dataService from '../data-service';


export function* getAllUsersSaga(){
  yield put(getAllUsersRequest());
  try {
    const users = yield dataService.get('/users')
      .then(({data}) => data);
    yield put(getAllUsersSuccess(users));
  } catch (error) {
    yield put(getAllUsersError(error));
  }
};

// export function* receiveUserSaga(payload){
//   yield put(receiveUserRequest());
//   try {
//     const user = yield dataService.get('/users/', payload)
//       .then(({data}) => data);
//     yield put(receiveUserSuccess(user));
//   } catch (error) {
//     yield put(receiveUserError(error));
//   }
// };

export function* createUserSaga({payload}){
  yield put(createUserRequest());
  try {
    const newUser = yield dataService.post(`/users`, payload)
      .then(({data}) => data);
    yield put(createUserSuccess(newUser));
  } catch (error) {
    yield put(createUserError(error));
  }
};

export function* updateUserSaga({payload}){
  yield put(updateUserRequest());
  try {
    const updateUser = yield dataService.put(`/users/${payload.id}`, payload)
      .then(({data}) => data);
    yield put(updateUserSuccess(updateUser));
  } catch (error) {
    yield put(updateUserError(error));
  }
};

export function* deleteUserSaga({payload}){
  yield put(deleteUserRequest());
  try {
    yield dataService.delete(`/users/${payload}`)
    yield put(deleteUserSuccess(payload));
  } catch (error) {
    yield put(deleteUserError(error));
  }
};