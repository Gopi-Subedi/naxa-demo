import { put, takeEvery } from "redux-saga/effects";
import { GET_PROJECT_LIST, SET_PROJECT_LIST } from "./actionConstant";

function* getProjectItems() {
  console.log("call api here");
  let data = yield fetch("https://admin.naxa.com.np/api/projects");
  data = yield data.json();
  console.log(data);

  yield put({ type: SET_PROJECT_LIST, data }); //calls the reducer with given type
}
function* mySaga() {
  yield takeEvery(GET_PROJECT_LIST, getProjectItems);
}

export default mySaga;
