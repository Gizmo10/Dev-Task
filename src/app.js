const express = require("express");
const app = express();
const port = 3001;

app.post("/", (req, res) => {
  res.send("POST REQUEST RECEIVED");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
