import { call, put, takeLatest, select } from 'redux-saga/effects';
import querystring from 'querystring';
import {
  API,
  GET_REQUEST,
  POST_REQUEST,
  LOADING_PREFIX,
  PATCH_REQUEST,
} from '@/utils/constants';
import { request, RequestOptions } from '@/utils/request';
import { loading, loadErrors, loadSuccess } from '@/states/global/actions';
import {
  setWebinarList,
  setWebinarDetails,
  setWebinarPublic,
  setAttendee,
  setPayment,
} from './actions';
import {
  GET_WEBINAR_LIST,
  CREATE_WEBINAR,
  GET_WEBINAR_PUBLIC,
  DO_REGISTER,
  DO_PAY,
  CAPTURE_PAYMENT,
  GET_WEBINAR_DETAILS,
  UPDATE_WEBINAR,
  DO_CONFIRM_REGISTRATION,
} from './types';
import {
  makeSelectWebinarForm,
  makeSelectWebinarRegistrationForm,
} from './selector';

function* webinarList() {
  try {
    yield put(loading(LOADING_PREFIX.LIST_WEBINAR));
    const query = {
      order: 'createdAt DESC',
    };
    const filter = {
      filter: JSON.stringify(query),
    };
    const stringifyQuery = querystring.stringify(filter);
    const response = yield call(
      request,
      `${API.WEBINARS}/?${stringifyQuery}`,
      RequestOptions(GET_REQUEST, null, true),
    );
    yield put(setWebinarList(response));
  } catch (error) {
    yield put(loadErrors(error));
  } finally {
    yield put(loading(LOADING_PREFIX.LIST_WEBINAR, false));
  }
}

function* createWebinar() {
  try {
    yield put(loading(LOADING_PREFIX.CREATE_WEBINAR));
    const payload = yield select(makeSelectWebinarForm());
    const response = yield call(
      request,
      API.WEBINARS,
      RequestOptions(POST_REQUEST, { ...payload }, true),
    );
    yield put(setWebinarDetails(response));
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.CREATE_WEBINAR));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.CREATE_WEBINAR, false));
    yield put(loadErrors(error));
  } finally {
    yield put(loading(LOADING_PREFIX.CREATE_WEBINAR, false));
  }
}

function* webinarPublicDetails({ payload }) {
  try {
    const { slug } = payload;
    yield put(loading(LOADING_PREFIX.WEBINAR));
    const response = yield call(
      request,
      `${API.WEBINAR_PUBLIC_DETAIL_PAGE}/${slug}`,
      RequestOptions(GET_REQUEST, null, false),
    );
    yield put(setWebinarPublic(response));
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.WEBINAR));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.WEBINAR, false));
    yield put(loadErrors(error));
  } finally {
    yield put(loading(LOADING_PREFIX.WEBINAR, false));
  }
}

function* webinarRegistration() {
  try {
    const payload = yield select(makeSelectWebinarRegistrationForm());
    yield put(loading(LOADING_PREFIX.REGISTER));
    const response = yield call(
      request,
      `${API.WEBINAR_PUBLIC_DETAIL_PAGE}/register`,
      RequestOptions(POST_REQUEST, { ...payload }, false),
    );
    yield put(setAttendee(response));
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.REGISTER));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.REGISTER, false));
    yield put(loadErrors(error));
  } finally {
    yield put(loading(LOADING_PREFIX.REGISTER, false));
  }
}

function* webinarRegistrationConfirmation({ payload }) {
  try {
    yield put(loading(LOADING_PREFIX.REGISTER_CONFIRM));
    yield call(
      request,
      `${API.WEBINAR_PUBLIC_DETAIL_PAGE}/register-confirm`,
      RequestOptions(POST_REQUEST, { ...payload }, false),
    );
    // yield put(setAttendee(response));
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.REGISTER_CONFIRM));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.REGISTER_CONFIRM, false));
    yield put(loadErrors(error));
  } finally {
    yield put(loading(LOADING_PREFIX.REGISTER_CONFIRM, false));
  }
}

function* webinarPayment({ payload }) {
  try {
    yield put(loading(LOADING_PREFIX.PAYMENT));
    const response = yield call(
      request,
      `${API.PAYMENT}`,
      RequestOptions(POST_REQUEST, { ...payload }, false),
    );
    yield put(setPayment(response));
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.PAYMENT));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.PAYMENT, false));
    yield put(loadErrors(error));
  } finally {
    yield put(loading(LOADING_PREFIX.PAYMENT, false));
  }
}

function* capturePayment({ payload }) {
  try {
    yield put(loading(LOADING_PREFIX.PAYMENT));
    yield call(
      request,
      `${API.PAYMENT}/capture`,
      RequestOptions(POST_REQUEST, { ...payload }, false),
    );
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.PAYMENT));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.PAYMENT, false));
    yield put(loadErrors(error));
  } finally {
    yield put(loading(LOADING_PREFIX.PAYMENT, false));
  }
}

function* webinarDetails({ payload }) {
  try {
    const { id } = payload;
    yield put(loading(LOADING_PREFIX.WEBINAR_DETAILS));
    const response = yield call(
      request,
      `${API.WEBINARS}/${id}`,
      RequestOptions(GET_REQUEST, null, true),
    );
    yield put(setWebinarDetails(response));
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.WEBINAR_DETAILS));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.WEBINAR_DETAILS, false));
    yield put(loadErrors(error));
  } finally {
    yield put(loading(LOADING_PREFIX.WEBINAR_DETAILS, false));
  }
}

function* updateWebinar() {
  try {
    yield put(loading(LOADING_PREFIX.UPDATE_WEBINAR));
    const payload = yield select(makeSelectWebinarForm());
    const { id } = payload;
    yield call(
      request,
      `${API.WEBINARS}/${id}`,
      RequestOptions(PATCH_REQUEST, { ...payload }, true),
    );
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.UPDATE_WEBINAR));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.UPDATE_WEBINAR, false));
    yield put(loadErrors(error));
  } finally {
    yield put(loading(LOADING_PREFIX.UPDATE_WEBINAR, false));
  }
}

export default function* webinarSaga() {
  yield takeLatest(GET_WEBINAR_LIST, webinarList);
  yield takeLatest(CREATE_WEBINAR, createWebinar);
  yield takeLatest(UPDATE_WEBINAR, updateWebinar);
  yield takeLatest(GET_WEBINAR_PUBLIC, webinarPublicDetails);
  yield takeLatest(DO_REGISTER, webinarRegistration);
  yield takeLatest(DO_CONFIRM_REGISTRATION, webinarRegistrationConfirmation);
  yield takeLatest(DO_PAY, webinarPayment);
  yield takeLatest(CAPTURE_PAYMENT, capturePayment);
  yield takeLatest(GET_WEBINAR_DETAILS, webinarDetails);
}
