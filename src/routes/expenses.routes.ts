import { Router } from "express";
import * as expenseController from "../controllers/expense.controller";
import { validateBody } from "../middlewares/validateBody";
import { expenseSchema } from "../validators/expense.validators";

const expenseRoutes = Router();

expenseRoutes.post("/", validateBody(expenseSchema), expenseController.createExpense);
expenseRoutes.get("/", expenseController.getAllExpenses);
expenseRoutes.get("/:id", expenseController.getExpenseById);
expenseRoutes.put("/:id", validateBody(expenseSchema), expenseController.updateExpenseById);
expenseRoutes.delete("/:id", expenseController.deleteExpenseById);

export default expenseRoutes;