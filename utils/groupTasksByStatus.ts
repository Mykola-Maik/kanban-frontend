import { Task, TaskStatuses } from "@/types";

export const groupTasksByStatus = (tasks: Task[]): TaskStatuses => {
  const result: TaskStatuses = {
    open: [],
    in_progress: [],
    completed: [],
  };

  tasks.forEach((task) => {
    if (task.status in result) {
      result[task.status].push(task);
    } else {
      console.error(`Invalid status for task: ${JSON.stringify(task)}`);
    }
  });

  return result;
};
