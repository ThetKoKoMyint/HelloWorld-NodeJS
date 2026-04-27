const express = require("express");
const app = express();

// IMPORTANT: Azure provides PORT dynamically
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World from Node.js on Azure!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
