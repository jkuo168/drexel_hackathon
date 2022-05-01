import React, { useState } from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FeedPage from "./FeedPage";

export default function FriendPage(props) {
  const [feed, setFeed] = useState(false);
  const data = props.data;
  const new_friend = data.bottom === "You earned a new friend!";
  if (feed) {
    return <FeedPage friend={new_friend ? "koala.gif" : null} />;
  }

  return (
    <Box
      sx={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
        backgroundImage: `url("https://i.stack.imgur.com/nItQK.png")`,
      }}
    >
      <Box
        sx={{
          ml: 3,
          mt: 2,
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <IconButton href="/">
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          textAlign: "center",
          pt: 20,
        }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          {data.bottom}
        </Typography>
        <img src={data.friend} style={{ height: "30%" }} />
        <Button
          variant="contained"
          onClick={() => {
            setFeed(true);
          }}
          sx={{ mt: 10 }}
        >
          Feed Fluffy Again
        </Button>
      </Box>
    </Box>
  );
}
