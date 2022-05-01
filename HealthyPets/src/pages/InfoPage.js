import React, { useState } from "react";
import { Box, Button, Card, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ResultPage from "./ResultPage";

export default function InfoPage(props) {
  const [result, setResults] = useState(false);
  const [friends, setFriends] = useState([]);

  const data = props.data;
  const information = {
    "salad.webp": {
      image: "salad_edit.jpg",
      name: "Salad",
      healthometer: 90,
      type: "Vegetable",
      calories: 100,
      protein: 3.7,
      sugar: 1.8,
      fat: 30.4,
      salt: 0.1,
    },
    "hamburger.jpg": {
      image: "hamburger_edit.jpg",
      name: "Hamburger",
      healthometer: 10,
      type: "Protein",
      calories: 570,
      protein: 43.0,
      sugar: 5,
      fat: 15.4,
      salt: 30,
    },
  };

  if (result) {
    return <ResultPage data={data} friends={friends} setFriends={setFriends} />;
  }

  const info = information[data.name];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
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
          textAlign: "center",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          mt: 10,
        }}
      >
        <Typography variant="h4">Nutritional Value Breakdown</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          mt: 10,
        }}
      >
        <Box sx={{ pr: 10, height: "100%" }}>
          <Card
            sx={{
              width: "300px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box sx={{ pb: 3 }}>
              <Typography variant="h5">
                <strong>{info.name}</strong>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "center",
                width: "70%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography>
                  <strong>Healthometer:</strong>
                </Typography>
                <Typography>{info.healthometer}</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography>
                  <strong>Type</strong>
                </Typography>
                <Typography>{info.type}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography>
                  <strong>Calories:</strong>
                </Typography>
                <Typography>{info.calories}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography>
                  <strong>Protein:</strong>
                </Typography>
                <Typography>{info.protein}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography>
                  <strong>Sugar:</strong>
                </Typography>
                <Typography>{info.sugar}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography>
                  <strong>Fat:</strong>
                </Typography>
                <Typography>{info.fat}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography>
                  <strong>Salt:</strong>
                </Typography>
                <Typography>{info.salt}</Typography>
              </Box>
            </Box>
          </Card>
        </Box>
        <Box>
          <img
            src={info.image}
            style={{ borderRadius: "4px", height: "300px" }}
          ></img>
        </Box>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Box>
          <Button
            sx={{ mt: 10 }}
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
