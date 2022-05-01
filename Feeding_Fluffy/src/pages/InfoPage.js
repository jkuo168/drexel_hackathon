import React, { useState } from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ResultPage from "./ResultPage";

export default function InfoPage() {
  const [result, setResults] = useState(false);

  if (result) {
    return <ResultPage />;
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
          mt: 10,
        }}
      >
        <Box
          sx={{
            mb: 3,
            display: "flex",
            flexDirection: "row",
            width: "100%",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ mr: 30, textAlign: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Health
            </Typography>
            <Typography>23.6</Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Health
            </Typography>
            <Typography>23.6</Typography>
          </Box>
        </Box>
        <img
          src="https://i.pinimg.com/originals/95/dd/60/95dd6052a734c650ccc719a5e11bd1b5.gif"
          style={{ borderRadius: "4px" }}
        ></img>
        <Box>
          <Button
            sx={{ mt: 3 }}
            variant="contained"
            onClick={() => {
              setResults(true);
            }}
          >
            Results
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
