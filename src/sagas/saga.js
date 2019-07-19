import { takeEvery, takeLatest, put, delay, call } from "redux-saga/effects";
import { fetchData, fetchData2, fetchData3 } from "../apiservices";
// import { delay } from "redux-saga";
function* ageUpAsync() {
  console.log("ageup async");
  yield delay(2000);
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}

export function* watchAgeUp() {
  yield takeLatest("AGE_UP", ageUpAsync);
}

function* callApis(action) {
  console.log("call api async");
  try {
    const data2 = yield call(fetchData2);
    yield put({ type: "CALL_POST_API", value: data2 });

    const data = yield call(fetchData);
    yield put({ type: "CALL_APIS_FULFILLED", value: data });

    const data3 = yield call(fetchData3);
    yield put({ type: "CALL_APIS_FULFILLED3", value: data3 });

    yield put({ type: "NOTIFY" });
  } catch (e) {
    console.log(e);
  }

  //1 call a get API
  //2 do a post API
  //3 if 2 has succeed create a notification
}

export function* watchApiCalls() {
  console.log("calling api");
  yield takeLatest("CALL_APIS", callApis);
}
