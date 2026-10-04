import { Request, Response } from "express";
import { addExpense } from "../repository/expense";
import { Expense } from "../types/expenses";

export async function createExpense(req: Request, res: Response) {
  const { description, amount, date } = req.body;

  const validDate = new Date(date);
  const expenseData: Omit<Expense, "id"> = {
    amount,
    description,
    date
  }

  const newExpense = addExpense(expenseData);

  return res
    .status(201)
    .json({
      message: "OK",
      description: "New expense created",
      details: newExpense
    });
}