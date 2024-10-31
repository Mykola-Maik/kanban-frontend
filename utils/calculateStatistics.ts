import { Status, Task } from "@/types";

export function calculateStatistics(tasks: Task[]) {
  const result = {
    byStatus: {} as Record<Status, number>,
    byAssignee: {} as Record<string, number>,
    byDueDate: {} as Record<string, number>,
  };

  const oldestDate = tasks.reduce(
    (oldest, task) => (task.dueDate < oldest ? task.dueDate : oldest),
    tasks[0].dueDate
  );

  tasks.forEach((task) => {
    result.byStatus[task.status] = (result.byStatus[task.status] || 0) + 1;

    result.byAssignee[task.assignee] =
      (result.byAssignee[task.assignee] || 0) + 1;

    const weekNumber =
      Math.floor(
        (task.dueDate.getTime() - oldestDate.getTime()) /
          (7 * 24 * 60 * 60 * 1000)
      ) + 1;
    const weekKey = `week${weekNumber}`;
    result.byDueDate[weekKey] = (result.byDueDate[weekKey] || 0) + 1;
  });

  return result;
}
