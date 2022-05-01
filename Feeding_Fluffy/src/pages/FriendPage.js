import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
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
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
        backgroundImage: `url("https://i.stack.imgur.com/nItQK.png")`,
        alignItems: "center",
        justifyContent: "center",
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
  );
}
