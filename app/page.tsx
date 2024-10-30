import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Image
        src="/home-bg.webp"
        alt="welcome screen"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      
      <Typography variant="h1" sx={{ color: "white", position: "absolute" }}>
        Explore board
      </Typography>
    </Box>
  );
}
