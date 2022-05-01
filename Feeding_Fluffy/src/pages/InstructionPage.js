import React, { useState } from "react";
import { Redirect, Router } from "react-router";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomePage from "./HomePage";
import FeedPage from "./FeedPage";

export default function InstructionPage() {
  const [info, setInfo] = useState(0);

  const text = [
    "Fluffy is a 6-month year old corgi",
    "Fluffy loves to eat",
    "Your goal is to feed Fluffy a variety of different foods",
    "However, you must be careful what you feed Fluffy",
    "Some things like chocolate make Fluffy very sick",
    "Other things like chicken make Fluffy very happy",
    "Good luck!",
  ];

  const handleText = (a) => {
    setInfo(info + a);
  };

  if (info === -1) {
    return <HomePage />;
  }

  if (info === 7) {
    return <FeedPage />;
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
      <Typography variant="h5">{text[info]}</Typography>
      <Box sx={{ display: "flex", flexDirection: "row", mt: 10 }}>
        <IconButton
          sx={{ mr: 10 }}
          color="primary"
          variant="contained"
          onClick={() => {
            handleText(-1);
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <IconButton
          color="primary"
          variant="contained"
          onClick={() => {
            handleText(1);
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
