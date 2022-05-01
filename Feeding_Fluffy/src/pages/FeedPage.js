import React, { useState } from "react";
import axios from "axios";
import { Box, Button, Typography } from "@mui/material";

export default function FeedPage() {
  const [selectedFile, setSelectedFile] = useState(null);

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
        <Box>
          <img src={image} style={{ height: "300px" }}></img>
        </Box>
      );
    } else {
      return (
        <Box>
          <Typography>Choose before Pressing the Upload button</Typography>
        </Box>
      );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundSize: "cover",
        backgroundImage: `url("https://i.stack.imgur.com/nItQK.png")`,
      }}
    >
      <Typography>
        Input an image of the food you would like to feed fluffy
      </Typography>
      <Button variant="outlined" component="label">
        Upload File
        <input
          type="file"
          hidden
          multiple
          accept="image/*"
          onChange={onFileChange}
        />
      </Button>
      {fileData()}
      <Button variant="outlined" onClick={onFileUpload}>
        Upload
      </Button>
    </Box>
  );
}
