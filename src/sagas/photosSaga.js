import { put } from "redux-saga/effects";

import dataService from '../data-service';
import { 
  getAlbumPhotosError,
  getAlbumPhotosRequest, 
  getAlbumPhotosSuccess 
} from "../store/actions/photosActions";


export function* getAlbumPhotosSaga({payload}){
  yield put(getAlbumPhotosRequest());
  try {
    const photos = yield dataService.get(`/albums/${payload}`)
      .then(({data}) => data);
    yield put(getAlbumPhotosSuccess(photos));
  } catch (error) {
    yield put(getAlbumPhotosError(error));
  }
};