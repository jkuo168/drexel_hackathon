import React, { useState } from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FriendPage from "./FriendPage";

export default function ResultPage(props) {
  const [feed, setFeed] = useState(false);
  const handleFeed = () => {
    setFeed(true);
  };
  const data = props.data;
  const name = data.name;

  const information = {
    "salad.webp": {
      text: "Fluffy loved his meal!",
      image:
        "https://i.pinimg.com/originals/95/dd/60/95dd6052a734c650ccc719a5e11bd1b5.gif",
      bottom: "You earned a new friend!",
      friend: "koala.gif",
    },
    "hamburger.jpg": {
      text: "Oh no! Fluffy threw up!",
      image:
        "https://i.pinimg.com/originals/a8/44/09/a8440985d4b95b69d368e9027674ca91.gif",
      bottom: "Sorry, you lost a friend :/",
      friend: "koala.gif",
    },
  };

  if (feed) {
    return <FriendPage data={information[name]} props={{ ...props }} />;
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
          mt: 25,
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          {information[name].text}
        </Typography>
        <img
          src={information[name].image}
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
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
