import { call, put, takeLatest } from 'redux-saga/effects';
import querystring from 'querystring';
import { API, GET_REQUEST, LOADING_PREFIX } from '@/utils/constants';
import { request, RequestOptions } from '@/utils/request';
import { loading, loadErrors, loadSuccess } from '@/states/global/actions';
import { GET_ATTENDEE_DETAILS, GET_WEBINAR_ATTENDEES } from './types';
import { setAttendeeDetails, setAttendeeList } from './action';

function* getAttendeeList({ payload }) {
  try {
    yield put(loading(LOADING_PREFIX.ATTENDEES));
    const { webinarId } = payload;
    const query = {
      where: {
        webinarId,
      },
    };
    const filter = {
      filter: JSON.stringify(query),
    };
    const stringifyQuery = querystring.stringify(filter);
    const response = yield call(
      request,
      `${API.ATTENDEES}?${stringifyQuery}`,
      RequestOptions(GET_REQUEST, null, true),
    );
    yield put(setAttendeeList(response));
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.ATTENDEES));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.ATTENDEES, false));
    yield put(loadErrors(error));
  } finally {
    yield put(loading(LOADING_PREFIX.ATTENDEES, false));
  }
}

function* getAttendeeDetails({ payload }) {
  try {
    yield put(loading(LOADING_PREFIX.ATTENDEEDETAIL));
    const { id } = payload;
    const response = yield call(
      request,
      `${API.ATTENDEES}/${id}`,
      RequestOptions(GET_REQUEST, null, true),
    );
    yield put(setAttendeeDetails(response));
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.ATTENDEEDETAIL));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.ATTENDEEDETAIL, false));
    yield put(loadErrors(error));
  } finally {
    yield put(loading(LOADING_PREFIX.ATTENDEEDETAIL, false));
  }
}

export default function* attendeeSaga() {
  yield takeLatest(GET_WEBINAR_ATTENDEES, getAttendeeList);
  yield takeLatest(GET_ATTENDEE_DETAILS, getAttendeeDetails);
}
