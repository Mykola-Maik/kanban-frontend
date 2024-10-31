"use client";

import type { Task as Todo } from "@/types";
import { useDraggable } from "@dnd-kit/core";
import { Box } from "@mui/material";
import { TaskContent } from "@/components";

export const Task = ({ task }: { task: Todo }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: task._id,
    });

  return (
    <Box
      ref={setNodeRef}
      // sx={{
      //   transform: `translate3d(${transform?.x || 0}px, ${
      //     transform?.y || 0
      //   }px, 0)`,
      //   padding: "8px",
      //   margin: "8px 0",
      //   backgroundColor: isDragging ? "#f0f0f0" : "#fff",
      //   border: "1px solid #ccc",
      //   borderRadius: "4px",
      //   boxShadow: isDragging ? "0px 4px 12px rgba(0, 0, 0, 0.15)" : "none",
      //   zIndex: isDragging ? 1000 : "auto",
      //   cursor: "grab",
      // }}
      {...listeners}
      {...attributes}
    >
      <TaskContent task={task} isDragging={isDragging} transform={transform} />
    </Box>
  );
};
