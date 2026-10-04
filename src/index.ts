import express from "express";
import routes from "./routes/index.routes";

const app = express();
const port = 3000;
app.use(express.json());

app.use(routes);
app.get('/', (req, res) => {
  res.json({ message: "OK" });
});

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
})