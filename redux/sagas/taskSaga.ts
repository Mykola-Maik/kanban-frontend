import { call, put, takeLatest } from "redux-saga/effects";
import { AxiosError, type AxiosResponse } from "axios";
import {
  getAllTasksFailure,
  getAllTasksRequest,
  getAllTasksSuccess,
  updateTaskStatusFailure,
  updateTaskStatusRequest,
  updateTaskStatusSuccess,
} from "@/redux/slices/taskSlice/taskSlice";
import HttpService from "@/services/HttpService/HttpService";
import { Status, Task } from "@/types";
import { PayloadAction } from "@reduxjs/toolkit";

function* getAllTasksSaga() {
  try {
    const response: AxiosResponse<Task[]> = yield call(
      HttpService.get,
      "/todos"
    );

    console.log(response.data);

    yield put(getAllTasksSuccess(response.data));
  } catch (error) {
    console.log("SAGA CATCH");
    if (error instanceof AxiosError) {
      console.error(error);
      yield put(getAllTasksFailure(error.message));
    } else {
      console.error("An unknown error occured!");
      yield put(getAllTasksFailure("An unknown error occured!"));
    }
  }
}

function* updateTaskStatusSaga({
  payload,
}: PayloadAction<{ taskId: string; newStatus: Status }>) {
  const { taskId, newStatus } = payload;

  try {
    const response: AxiosResponse<Task> = yield call(
      HttpService.patch,
      `/todos/${taskId}`,
      {
        status: newStatus,
      }
    );

    yield put(updateTaskStatusSuccess({ taskId, newStatus }));
  } catch (error) {
    console.log("SAGA CATCH");
    if (error instanceof AxiosError) {
      console.error(error);
      yield put(updateTaskStatusFailure(error.message));
    } else {
      console.error("An unknown error occured!");
      yield put(updateTaskStatusFailure("An unknown error occured!"));
    }
  }
}

function* taskWatcher() {
  yield takeLatest(getAllTasksRequest.type, getAllTasksSaga);
  yield takeLatest(updateTaskStatusRequest.type, updateTaskStatusSaga);
}

export default taskWatcher;
