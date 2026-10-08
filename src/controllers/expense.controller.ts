import { Request, Response } from "express";
import * as expenseRepository from "../repository/expense.repository";
import { Expense } from "../types/expenses";

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

  if(foundExpense === null) return res.status(404).json({message: "Expense not found"});

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

  const hasEdited = await expenseRepository.updateExpenseById(id, data);

  if(hasEdited === false) return res.status(404).json({message: "Expense not found"});

  return res
  .status(200)
  .json({
    message: "OK",
    details: data
  });
}

export async function deleteExpenseById(req: Request, res: Response) {
  const id = Number(req.params.id);

  const hasDeleted = await expenseRepository.deleteExpenseById(id); 

  if(!hasDeleted) return res.status(404).json({message: "Expense not found"});

  return res
  .status(200)
  .json({
    message: "OK",
    details: "Expense deleted"
  });
}