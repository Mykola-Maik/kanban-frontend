export type Status = "in_progress" | "completed" | "open";

export interface Task {
  _id: string;
  title: string;
  description: string;
  assignee: string;
  dueDate: Date;
  status: Status;
}
