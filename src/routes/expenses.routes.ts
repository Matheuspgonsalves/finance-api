import { Router } from "express";
import * as expenseController from "../controllers/expense.controller";

const expenseRoutes = Router();

expenseRoutes.post("/", expenseController.createExpense);
expenseRoutes.get("/", expenseController.getAllExpenses);
expenseRoutes.get("/:id", expenseController.getExpenseById);
expenseRoutes.put("/:id", expenseController.editExpenseById);
expenseRoutes.delete("/:id", expenseController.deleteExpenseById);

export default expenseRoutes;