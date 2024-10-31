import { Box, Typography } from "@mui/material";
import type { Task as Todo } from "@/types";
import { format } from "date-fns";

interface TaskContentProps {
  task: Todo;
  isDragging?: boolean;
  transform?: { x: number; y: number } | null;
}

export const TaskContent = ({
  task,
  isDragging,
  transform = { x: 0, y: 0 },
}: TaskContentProps) => (
  <Box
    sx={{
      transform: transform
        ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
        : "none",
      padding: "8px",
      margin: "8px 0",
      backgroundColor: isDragging ? "#f0f0f0" : "#fff",
      border: "1px solid #ccc",
      borderRadius: "4px",
      boxShadow: isDragging ? "0px 4px 12px rgba(0, 0, 0, 0.15)" : "none",
      cursor: "grab",
    }}
  >
    <Typography variant="body1" sx={{ fontWeight: 600, mb: 2 }}>
      {task.title}
    </Typography>

    <Box>
      <Typography variant="body1">
        Deadline: {format(task.dueDate, "dd/MM/yyyy")}
      </Typography>
      <Typography variant="body1">Assignee: {task.assignee}</Typography>
    </Box>
  </Box>
);
