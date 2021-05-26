import {takeEvery, all, call, put} from 'redux-saga/effects';
import {POST_SIGNUP } from './type';
import {registerSuccess,registerFailed  } from './action';
import { API } from '@/utils/constants';
import {request} from '@/utils/request';


function* registerSaga(action){
  try{
    const data = yield call(request, API.AUTH_REGISTER, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
    yield put(registerSuccess({...action.payload, ...data}));
  } catch(error) {
    yield (put(registerFailed(error.message)));
  }
}


function* registerDataWatcher() {
  yield takeEvery(POST_SIGNUP, registerSaga);
}


export default function* sigunUpSage(){
  yield all([registerDataWatcher()]);
}