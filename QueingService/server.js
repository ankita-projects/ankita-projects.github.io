const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));
let pingCount = 0;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/queueService", (req, res) => {
  pingCount++;
  res.send("Your queue number is "+pingCount+"!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
