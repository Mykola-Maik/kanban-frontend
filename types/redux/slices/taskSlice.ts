import { Task } from "@/types";

export interface TaskStatusObject {
  id: string;
  text: string;
}

export interface TaskStatuses {
  [key: string]: Task[];
}

export interface TaskSliceState {
  tasks: Task[];
  taskStatuses: TaskStatuses;
  isLoading: boolean;
  errors: string;
}
