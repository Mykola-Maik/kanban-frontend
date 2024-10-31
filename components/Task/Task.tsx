"use client";

import type { Task as Todo } from "@/types";
import { useDraggable } from "@dnd-kit/core";
import { Box } from "@mui/material";

export const Task = ({ task }: { task: Todo }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task._id,
  });

  return (
    <Box
      ref={setNodeRef}
      sx={{
        transform: `translate3d(${transform?.x || 0}px, ${
          transform?.y || 0
        }px, 0)`,
        padding: "8px",
        margin: "4px 0",
        backgroundColor: "#f0f0f0",
        border: "1px solid #ddd",
        borderRadius: "4px",
      }}
      {...listeners}
      {...attributes}
    >
      {task.title}
    </Box>
  );
};
