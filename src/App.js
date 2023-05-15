import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenseDate = new Date("2023-03-01");
  const expenseDescription = "Car Insurance";
  const expensePrice = 320.00;
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem expenseDate={expenseDate} expenseDescription={expenseDescription} expensePrice={expensePrice}/>
    </div>
  );
}

export default App;
