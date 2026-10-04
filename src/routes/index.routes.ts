import { Router } from "express";
import expenseRoutes from "./expenses.routes";

const routes = Router();

routes.use("/expenses", expenseRoutes);

export default routes;