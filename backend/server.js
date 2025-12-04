const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("後端已啟動！歡迎來到你的 Node.js API");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
