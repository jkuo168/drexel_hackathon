import React, { useState } from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FeedPage from "./FeedPage";

export default function ResultPage() {
  const [feed, setFeed] = useState(false);
  const handleFeed = () => {
    setFeed(true);
  };

  if (feed) {
    return <FeedPage />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
        backgroundImage: `url("https://i.stack.imgur.com/nItQK.png")`,
      }}
    >
      <Box sx={{ ml: 3, mt: 2 }}>
        <IconButton href="/">
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          mt: 15,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Fluffy loved the meal!
        </Typography>
        <img
          src="https://i.pinimg.com/originals/95/dd/60/95dd6052a734c650ccc719a5e11bd1b5.gif"
          style={{ width: "30%", borderRadius: "4px" }}
        />
        <Box>
          <Button
            variant="contained"
            sx={{ mt: 5 }}
            onClick={() => {
              handleFeed();
            }}
          >
            Feed Fluffy Again
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
