const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("started listening on localhost:", port);
});

app.get("/uploadfile", (req, res) => {
  const image = req.query.info;
  const image_name = image.name;

  res.send(image);
});
