import {call, put, takeLatest, all} from "redux-saga/effects"
import axios from "axios";
import * as types from "./types";

// worker saga, will be fired on DIRTREE_FETCH_RECEIVED actions
function* fetchFromURL(successType, errorType, action) {
  try {
    const response = yield call(axios.get, action.url);
    yield put({
      type: successType,
      payload: response.data
    });
  } catch (e) {
    yield put({
      type: errorType,
      message: e.message
    });
  }
}

function* watchFetchRequests() {
  yield all([
    takeLatest(types.TODOS_FETCH_REQUESTED, fetchFromURL, types.TODOS_FETCH_RECEIVED, types.TODOS_FETCH_FAILED),
    // TODO: add more stuff here, one line for each typ of request
  ]);
}

export function* rootSaga() {
  yield all([
    watchFetchRequests()
  ]);
}