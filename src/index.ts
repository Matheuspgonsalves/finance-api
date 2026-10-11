import express from "express";
import routes from "./routes/index.routes";
import { errorHandler } from "./middlewares/errorHandler";
import { jsonErrorTranslator } from "./middlewares/jsonErrorTranslator";

const app = express();
const port = 3000;
app.use(express.json());
app.use(jsonErrorTranslator);

app.use(routes);
app.get('/', (req, res) => {
  res.json({ message: "OK" });
});
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
})