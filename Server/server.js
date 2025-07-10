const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["User 1", "User 2", "User 3"] });
});

app.listen(3001, () => {
  console.log("Server started on port:3001");
});
