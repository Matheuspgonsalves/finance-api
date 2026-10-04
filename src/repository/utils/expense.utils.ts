import { Expense } from "../../types/expenses";

export function findIndexById(id: Number, list: Expense[]): number {
  return list.findIndex(obj => obj.id === id);
}