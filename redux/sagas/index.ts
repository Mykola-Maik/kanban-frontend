import { all } from "redux-saga/effects";
import taskWatcher from "@/redux/sagas/taskSaga";

export default function* rootSaga() {
  yield all([taskWatcher()]);
}
