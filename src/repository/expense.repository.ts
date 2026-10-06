import { prisma } from "../lib/prisma";
import { Expense } from "../types/expenses";

export async function addExpense(expense: Omit<Expense, "id">) {

  const newExpense = await prisma.expense.create({
    data: {amount: expense.amount, description: expense.description, date: expense.date},
  });

  return newExpense;
}

export async function listExpenses() {
  return await prisma.expense.findMany();
}

export async function findExpenseById(id: number) {
  return await prisma.expense.findUnique({where: {id}});
}

export async function updateExpenseById(id: number, data: Omit<Expense, "id">): Promise<boolean> {
  const expense = await prisma.expense.findUnique({where: {id}});
  if(expense === null) return false;

  await prisma.expense.update({
    where: {id},
    data: {amount: data.amount, description: data.description, date: data.date},
  });

  return true;
}

export async function deleteExpenseById(id: number): Promise<boolean> {
  const expense = await prisma.expense.findUnique({where: {id}});
  if(expense === null) return false;


  await prisma.expense.delete({where: {id}});
  return true;
}
