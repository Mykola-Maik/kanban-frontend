import { Box } from "@mui/material";
import theme from "@/styles/muiTheme";
import Image from "next/image";
import Link from "next/link";

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

      <Box
        component={Link}
        href="/board"
        sx={{
          p: 1,
          color: theme.palette.common.white,
          position: "absolute",
          border: "1px solid transparent",
          borderRadius: 2,
          fontSize: 64,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(200, 200, 200, 0.5)",
          boxShadow: "0px 4px 20px rgba(200, 200, 200, 0.2)",
          transition: "border-color 0.3s ease,  box-shadow 0.3s ease",

          "&:hover": {
            borderColor: theme.palette.common.white,
            boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.4)",
          },
        }}
      >
        Explore board
      </Box>
    </Box>
  );
}
