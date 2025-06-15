const express = require("express");
const app = express();
const port = 3001;

app.post("/", (req, res) => {
  try {
    console.log(req.body);
    const data = req.body;

    if (typeof data !== "string") {
      throw new Error(`Expected data to be of type string`);
    }

    if (data.length <= 0) {
      throw new Error(`Expected data not to be empty`);
    }
    console.log(data);

    res.send(data);
  } catch (error) {
    throw new Error(`Failed to convert string: ${error.message}`);
  }
  // res.send("POST REQUEST RECEIVED");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
