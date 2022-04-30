import React from "react";
import { Box, Button, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3">Welcome to Feeding Fluffy</Typography>
        <Typography>
          Your goal is to keepy Fluffy alive by feeding him food.
        </Typography>
        <Typography>
          However, you must be careful what you feed him! Any unhealthy food can
          easily kill Fluffy.
        </Typography>
        <Typography>To begin, click the button below. Good Luck!</Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Button variant="outlined" href="\feed">
          Begin
        </Button>
      </Box>
    </Box>
  );
}
