const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/queueService", (req, res) => {
  res.send("Your queue number is 5!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
