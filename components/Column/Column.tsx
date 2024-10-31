"use client";

import type { Task as Todo } from "@/types";
import { useDroppable } from "@dnd-kit/core";
import { ReactNode } from "react";
import { Task } from "@/components";
import { Box, Typography } from "@mui/material";

interface ColumnProps {
  id: string;
  tasks: Todo[];
  children: ReactNode;
}

export const Column = ({ id, tasks, children }: ColumnProps) => {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <Box
      ref={setNodeRef}
      sx={{
        padding: "16px",
        backgroundColor: "#f8f8f8",
        border: "1px solid #ddd",
        borderRadius: "4px",
        width: "250px",
        minHeight: "300px",
      }}
    >
      <Typography variant="h3">{children}</Typography>
      {tasks.map((task) => (
        <Task key={task._id} task={task} />
      ))}
    </Box>
  );
};