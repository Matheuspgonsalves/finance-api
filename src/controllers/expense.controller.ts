import { Request, Response } from "express";
import * as expenseRepository from "../repository/expense.repository";
import { Expense } from "../types/expenses";
import { AppError, NotFoundError } from "../errors/AppError";

export async function createExpense(req: Request, res: Response) {
  const { description, amount, date } = req.body;

  const expenseData: Omit<Expense, "id"> = {
    amount,
    description,
    date
  };

  const newExpense = await expenseRepository.addExpense(expenseData);

  return res
    .status(201)
    .json({
      message: "OK",
      description: "New expense created",
      details: newExpense
    });
}

export async function getAllExpenses(req: Request, res: Response) {
  const expenseList = await expenseRepository.listExpenses();

  return res
  .status(200)
  .json({
    message: "OK",
    details: expenseList
  });
}

export async function getExpenseById(req: Request, res: Response) {
  const id = req.params.id;
  const foundExpense = await expenseRepository.findExpenseById(Number(id));

  if(foundExpense === null) throw new NotFoundError("Expense");

  return res
  .status(200)
  .json({
    message: "OK",
    details: foundExpense
  });
}

export async function updateExpenseById(req: Request, res: Response) {
  const id = Number(req.params.id);
  const { amount, description, date } = req.body;

  const data = {
    id,
    amount,
    description,
    date
  }

  const editedExpense = await expenseRepository.updateExpenseById(id, data);

  if(editedExpense === null) throw new NotFoundError("Expense");

  return res
  .status(200)
  .json({
    message: "OK",
    details: editedExpense
  });
}

export async function deleteExpenseById(req: Request, res: Response) {
  const id = Number(req.params.id);

  const hasDeleted = await expenseRepository.deleteExpenseById(id); 

  if(!hasDeleted) throw new NotFoundError("Expense");

  return res
  .status(200)
  .json({
    message: "OK",
    details: "Expense deleted"
  });
}