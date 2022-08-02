import { put } from "redux-saga/effects";
import dataService from '../data-service';
import { 
  getAllAlbumsError,
  getAllAlbumsRequest, 
  getAllAlbumsSuccess, 
} from "../store/actions/albumsActions";


export function* getAllAlbumsSaga(){
  yield put(getAllAlbumsRequest());
  try {
    const albums = yield dataService.get('/albums')
      .then(({data}) => data);
    yield put(getAllAlbumsSuccess(albums));
  } catch (error) {
    yield put(getAllAlbumsError(error));
  }
};