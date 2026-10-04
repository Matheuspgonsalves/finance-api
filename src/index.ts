import express from "express";
import { createExpense } from "./controllers/createExpense";

const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "OK" });
});

app.post('/expenses', createExpense);

// app.post('/expenses', (req, res) => {
//   const { description, amount } = req.body;

//   const newExpense: Expense = {
//     id: idCount,
//     amount,
//     description,
//     date: new Date()
//   }

//   idCount++
//   expenses.push(newExpense);
//   return res
//   .status(201)
//   .json({
//     message: "Ok",
//     description: "New Expense Created",
//     details: newExpense
//   });
// });

// app.get('/expenses', (req, res) => {
//   return res
//   .status(200)
//   .json({
//     message: "Ok",
//     expenses
//   });
// });

// app.get('/expenses/:id', (req, res) => {
//   const id = req.params.id;
//   const foundExpense = expenses.find(obj => obj.id === Number(id));

//   if(!foundExpense) return res.status(404).json({message: "Expense not found"});

//   return res
//   .status(200)
//   .json({
//     message: "Ok",
//     expense: foundExpense
//   });
// });

// app.put('/expenses/:id', (req, res) => {
//   const id = req.params.id;
//   const foundIndex = expenses.findIndex(obj => obj.id === Number(id));

//   if(foundIndex === -1) return res.status(404).json({message: "Expense not found"});

//   const { amount, description } = req.body;
//   let expense = expenses.at(foundIndex)!;

//   const newExpense: Expense = {
//     id: expense.id,
//     amount,
//     description,
//     date: new Date()
//   };
  

//   expenses[foundIndex] = newExpense;

//   return res
//   .status(200)
//   .json({
//     message: "Ok",
//     expense: newExpense
//   });
// });

// app.delete('/expenses/:id', (req, res) => {
//   const id = req.params.id;
//   const foundIndex = expenses.findIndex(obj => obj.id === Number(id));

//   if(foundIndex === -1) return res.status(404).json({message: "Expense not found"});
  
//   const deletedExpense: Expense = expenses[foundIndex]; 
//   expenses.splice(foundIndex, 1);

//   return res
//   .status(200)
//   .json({
//     message: "Ok",
//     description: "Expense deleted",
//     deleted: deletedExpense
//   });
// });

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
})