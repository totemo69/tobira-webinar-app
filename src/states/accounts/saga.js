import {takeEvery, call, put, all } from 'redux-saga/effects';
import { GET_ZOOM_ACCOUNT } from './types';
import { getZoomAccountSuccess,getZoomAccountFailed  } from './actions';
import {API} from '@/utils/constants';
import {request} from '@/utils/request';

function* zoomAccountSaga(){
  try{
    const data = call(request, API.AUTH_ZOOM_ACCOUNT);
    yield put(getZoomAccountSuccess(data));
    console.log(data);
  }
  catch(error){
    yield put(getZoomAccountFailed(error.message));
  }
}


function* zoomAccountWatcher(){
  yield takeEvery(GET_ZOOM_ACCOUNT, zoomAccountSaga);
}

export default function* AccountSaga() {
  yield all([zoomAccountWatcher()]);
}
