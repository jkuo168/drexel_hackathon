import React, { useState } from "react";
import axios from "axios";
import { Box, Button, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoPage from "./InfoPage";

export default function FeedPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [healthy, setHealthy] = useState(null);

  // On file select (from the pop up)
  const onFileChange = (event) => {
    // Update the state
    setSelectedFile(event.target.files[0]);
  };

  // On file upload (click the upload button)
  const onFileUpload = () => {
    // // Create an object of formData
    // const formData = new FormData();

    // // Update the formData object
    // formData.append("myFile", selectedFile, selectedFile);

    // Request made to the backend api
    // Send formData object
    const file = {
      lastModified: selectedFile.lastModified,
      lastModifiedDate: selectedFile.lastModifiedDate,
      name: selectedFile.name,
      size: selectedFile.size,
      type: selectedFile.type,
    };

    axios
      .get("http://localhost:4000/uploadfile", {
        params: { info: JSON.stringify(file) },
      })
      .then((response) => {
        setHealthy(true);
        console.log(response);
      });
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
        <Box sx={{ mt: 30 }}>
          <Typography>Choose before Pressing the Upload button</Typography>
        </Box>
      );
    }
  };

  if (healthy) {
    return <InfoPage />;
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
      <Box sx={{ ml: 3, mt: 2 }}>
        <IconButton href="/">
          <ArrowBackIcon />
        </IconButton>
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
            sx={{ mt: selectedFile ? 10 : 30 }}
          >
            Feed Fluffy
          </Button>
          <div
            style={{
              diplay: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img alt="lion" width="400" src={"lion.gif"}></img>
            <img alt="trex" width="350" src={"trex.gif"}></img>
            <img alt="koala" width="350" src={"koala.gif"}></img>
            <img alt="fox" width="400" src={"fox.gif"}></img>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
