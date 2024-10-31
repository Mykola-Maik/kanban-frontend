import type { Status, Task, TaskSliceState } from "@/types";
import { groupTasksByStatus } from "@/utils";
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
      state.taskStatuses = groupTasksByStatus(action.payload);
    },
    getAllTasksFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    updateTaskStatusRequest: (
      state,
      _action: PayloadAction<{ taskId: string; newStatus: Status }>
    ) => {
      state.isLoading = true;
    },
    updateTaskStatusSuccess: (
      state,
      action: PayloadAction<{ taskId: string; newStatus: Status }>
    ) => {
      const updatedTodos: Task[] = state.tasks.map((task) => {
        if (task._id === action.payload.taskId) {
          return {
            ...task,
            status: action.payload.newStatus,
          };
        }

        return task;
      });

      state.isLoading = false;
      state.tasks = updatedTodos;
      state.taskStatuses = groupTasksByStatus(updatedTodos);
    },
    updateTaskStatusFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

export const {
  getAllTasksRequest,
  getAllTasksSuccess,
  getAllTasksFailure,
  updateTaskStatusRequest,
  updateTaskStatusSuccess,
  updateTaskStatusFailure,
} = taskSlice.actions;

export default taskSlice.reducer;
