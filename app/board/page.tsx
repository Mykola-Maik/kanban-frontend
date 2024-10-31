import { KanbanBoard } from "@/components";
import { Box, Typography } from "@mui/material";

export default function BoardPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3">Manage your tasks</Typography>

      <KanbanBoard />
    </Box>
  );
}
