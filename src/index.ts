import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: "OK" });
});

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
})