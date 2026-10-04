import { Expense } from "../types/expenses";
import { findIndexById } from "./utils/expense.utils";

let expenses: Expense[] = [];
let idCount = 0;

export function addExpense(expense: Omit<Expense, "id">): Expense {

  const { description, amount, date } = expense;

  const newExpense: Expense = {
    id: idCount,
    amount,
    description,
    date
  }

  expenses.push(newExpense);
  idCount++;

  return newExpense;
}

export function listExpenses(): Expense[] {
  return expenses;
}

export function findById(id: number): Expense | null {
  return expenses.find(obj => obj.id === Number(id)) || null;
}

export function editExpenseById(data: Expense): boolean {
  const { id, amount, description, date } = data;
  const foundIndex = findIndexById(id, expenses);

  if(foundIndex === -1) return false;

  const newExpense = {
    id,
    amount,
    description,
    date
  }

  expenses[foundIndex] = newExpense;

  return true;
}

export function deleteExpenseById(id: number): boolean {
  const foundIndex = findIndexById(id, expenses);

  if(foundIndex === -1) return false;
 
  expenses.splice(foundIndex, 1);

  return true;
}
