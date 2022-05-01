import React, { useState } from "react";
import axios from "axios";
import { Box, Button, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoPage from "./InfoPage";

export default function FeedPage(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [healthy, setHealthy] = useState(null);
  const friend = props.friend;

  // On file select (from the pop up)
  const onFileChange = (event) => {
    // Update the state
    setSelectedFile(event.target.files[0]);
  };

  // On file upload (click the upload button)
  const onFileUpload = () => {
    setHealthy(true);
  };

  // File content to be displayed after
  // file upload is complete
  const fileData = () => {
    if (selectedFile) {
      const MAX_HEIGHT = 300;
      const MAX_WIDTH = 300;
      const image = URL.createObjectURL(selectedFile);

      return (
        <Box sx={{ mt: 10 }}>
          <img
            src={image}
            style={{ height: "300px", borderRadius: "4px" }}
          ></img>
        </Box>
      );
    } else {
      return (
        <Box sx={{ mt: 25 }}>
          <Typography>Choose before Pressing the Upload button</Typography>
        </Box>
      );
    }
  };

  if (healthy) {
    return <InfoPage data={selectedFile} />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
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
        <Box sx={{ display: "flex", flexGrow: 1 }}></Box>
        <Box sx={{ pr: 5 }}>
          {friend ? <img src={friend} style={{ height: "50px" }} /> : <></>}
        </Box>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ mt: 5 }} variant="h5">
          Input an image of the food you would like to feed Fluffy
        </Typography>
        <Box>
          <Button component="label" sx={{ mt: 3 }} variant="contained">
            Select Image
            <input
              type="file"
              hidden
              multiple
              accept="image/*"
              onChange={onFileChange}
            />
          </Button>
          {fileData()}
          <Button
            variant="contained"
            onClick={onFileUpload}
            sx={{ mt: selectedFile ? 10 : 25 }}
          >
            Feed Fluffy
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
