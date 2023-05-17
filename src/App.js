
import Expenses from "./components/Expenses"
import NewExpense from "./components/NewExpense";
import {useState} from "react";

const EXPENSES = [
  {
    description: "Car Insurance",
    price: 320.00,
    date: new Date("2023-03-01")
  },
  {
    description: "Apartment Rent",
    price: 3000.50,
    date: new Date("2022-04-28")
  },
  {
    description: "iphone insallment",
    price: 900,
    date: new Date("2021-03-26")
  }
]

function App() {
  console.log(EXPENSES);
  const [expenses, setExpenses] = useState(EXPENSES);

  const handleAddingExpenses = (newExpense) => {
    // adding a new expense function
    setExpenses(prevExpenses => {
      return [newExpense, ...prevExpenses];
    })
  }
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense handleAddingExpenses={handleAddingExpenses} />
      <Expenses  expenses={expenses} />
    </div>
  );
}

export default App;
