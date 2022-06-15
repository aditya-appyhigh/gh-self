import express from "express";

const app = express();
const port = 53333;

app.get("/", (req, res) => {
  res.send("Hello GH-runner!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
