import { call, put, takeLatest } from "redux-saga/effects";
import { AxiosError, type AxiosResponse } from "axios";
import {
  getAllTasksFailure,
  getAllTasksRequest,
  getAllTasksSuccess,
} from "@/redux/slices/taskSlice/taskSlice";
import HttpService from "@/services/HttpService/HttpService";
import { Task } from "@/types";

function* getAllTasksSaga() {
  try {
    const response: AxiosResponse<Task[]> = yield call(
      HttpService.get,
      "/todos"
    );

    yield put(getAllTasksSuccess(response.data));
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error);
      yield put(getAllTasksFailure(error.message));
    } else {
      console.error("An unknown error occured!");
      yield put(getAllTasksFailure("An unknown error occured!"));
    }
  }
}

function* taskWatcher() {
  yield takeLatest(getAllTasksRequest.type, getAllTasksSaga);
}

export default taskWatcher;
