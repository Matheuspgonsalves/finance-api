import { Expense } from "../types/expenses";

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