"use client";

import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  DndContext,
  type DragEndEvent,
  closestCenter,
  DragOverlay,
} from "@dnd-kit/core";
import { Column, TaskContent } from "@/components";
import type { Status, Task, TaskStatuses } from "@/types";
import { Box } from "@mui/material";
import { updateTaskStatusRequest } from "@/redux/slices/taskSlice/taskSlice";
import { useState } from "react";

export function KanbanBoard() {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.taskSlice.taskStatuses);

  const [activeTodo, setActiveTodo] = useState<Task | null>(null);
  console.log(tasks);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTodo(null);

    if (!over || active.id === over.id) return;

    const fromColumn = Object.keys(tasks).find((key) =>
      tasks[key as keyof TaskStatuses].some(
        (task: Task) => task._id === active.id
      )
    );
    const toColumn = over.id as Status;

    console.log(toColumn);

    if (fromColumn && toColumn && fromColumn !== toColumn) {
      const activeTask = tasks[fromColumn as keyof TaskStatuses].find(
        (task: Task) => task._id === active.id
      );

      if (activeTask) {
        dispatch(
          updateTaskStatusRequest({
            taskId: activeTask._id,
            newStatus: toColumn,
          })
        );
      }
    }
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragStart={({ active }) => {
        const fromColumn = Object.keys(tasks).find((key) =>
          tasks[key as keyof TaskStatuses].some(
            (task: Task) => task._id === active.id
          )
        );
        const task = fromColumn
          ? tasks[fromColumn as keyof TaskStatuses].find(
              (task: Task) => task._id === active.id
            )
          : null;
        setActiveTodo(task || null);
      }}
    >
      <Box
        sx={{ display: "flex", height: "600px", gap: "16px", padding: "16px" }}
      >
        <Box component={Column} id="open" tasks={tasks.open}>
          Open
        </Box>
        <Box component={Column} id="in_progress" tasks={tasks.in_progress}>
          In Progress
        </Box>
        <Box component={Column} id="completed" tasks={tasks.completed}>
          Completed
        </Box>
      </Box>

      <DragOverlay >
        {activeTodo ? <TaskContent task={activeTodo} isDragging /> : null}
      </DragOverlay>
    </DndContext>
  );
}
