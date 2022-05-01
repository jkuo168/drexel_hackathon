import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import InstructionPage from "./InstructionPage";

export default function HomePage() {
  const [show, setShow] = useState(false);
  if (show) {
    return <InstructionPage />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
        backgroundImage: `url("https://i.stack.imgur.com/nItQK.png")`,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h2" sx={{ mb: 4 }}>
        Welcome to HealthyPets
      </Typography>
      <img
        src="https://i.pinimg.com/originals/95/dd/60/95dd6052a734c650ccc719a5e11bd1b5.gif"
        style={{ height: "30%", borderRadius: "4px" }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 6 }}
        onClick={() => {
          setShow(true);
        }}
      >
        Begin
      </Button>
    </Box>
  );
}
