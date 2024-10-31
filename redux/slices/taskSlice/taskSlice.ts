import type { Task, TaskSliceState } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: TaskSliceState = {
  tasks: [],
  taskStatuses: {
    open: [],
    in_progress: [],
    completed: [],
  },
  isLoading: false,
  errors: "",
};

export const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    getAllTasksRequest: (state) => {
      state.isLoading = true;
    },
    getAllTasksSuccess: (state, action: PayloadAction<Task[]>) => {
      state.isLoading = false;
      state.tasks = action.payload;
    },
    getAllTasksFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

export const { getAllTasksRequest, getAllTasksSuccess, getAllTasksFailure } =
  taskSlice.actions;

export default taskSlice.reducer;
