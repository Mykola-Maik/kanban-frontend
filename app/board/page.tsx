"use client";

import { KanbanBoard } from "@/components";
import { useAppDispatch } from "@/hooks";
import { getAllTasksRequest } from "@/redux/slices/taskSlice/taskSlice";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";

export default function BoardPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllTasksRequest());
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(200, 200, 200, 0.5)",
      }}
    >
      <Typography variant="h3" sx={{ mb: 3, textAlign: "center" }}>
        Manage your tasks
      </Typography>

      <KanbanBoard />
    </Box>
  );
}
