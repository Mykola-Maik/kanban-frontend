"use client";

import { useAppSelector } from "@/hooks";
import { DndContext, type DragEndEvent, closestCenter } from "@dnd-kit/core";
import { useState } from "react";
import { Column } from "@/components";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import type { Task, TaskStatuses } from "@/types";
import { Box } from "@mui/material";

export function KanbanBoard() {
  const todos = useAppSelector((state) => state.taskSlice.taskStatuses);
  const [tasks, setTasks] = useState<TaskStatuses>(todos);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const fromColumn = Object.keys(tasks).find((key) =>
      tasks[key as keyof TaskStatuses].some(
        (task: Task) => task._id === active.id
      )
    );
    const toColumn = over.id;

    if (fromColumn && toColumn && fromColumn !== toColumn) {
      const activeTask = tasks[fromColumn as keyof TaskStatuses].find(
        (task: Task) => task._id === active.id
      );

      if (activeTask) {
        setTasks((prev) => ({
          ...prev,
          [fromColumn]: prev[fromColumn].filter(
            (task: Task) => task._id !== active.id
          ),
          [toColumn]: [...prev[toColumn], activeTask],
        }));
      }
    }
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis]}
    >
      <Box sx={{ display: "flex", gap: "16px", padding: "16px" }}>
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
    </DndContext>
  );
}
