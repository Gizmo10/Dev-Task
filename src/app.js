const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "src")));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/convertString", (req, res) => {
  try {
    const { data } = req.body;

    if (typeof data !== "string") {
      throw new Error(`Expected data to be of type string`);
    }

    if (data.length <= 0) {
      throw new Error(`Expected data not to be empty`);
    }

    const stringToArray = data
      .toLowerCase()
      .split("")
      .sort(function (letter1, letter2) {
        return letter1 === letter2 ? 0 : letter1 < letter2 ? -1 : 1;
      });

    res.json({ word: stringToArray });
  } catch (error) {
    throw new Error(`Failed to convert string: ${error.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
