import "../Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from 'react';
function Expenses(props) {
    let newExpenses = '';
    const [filter,setFilter] = useState(0);
    const handleFilter = (year) => {
        setFilter(year);
    }
    const filteredList = props.expenses.filter(e => e.date.getFullYear().toString() === filter);
    return(
        <div className="expenses">
            <ExpensesFilter filter={handleFilter}/>
            { filteredList.map(expense => <ExpenseItem expenseDate={expense.date} expenseDescription={expense.description} expensePrice={expense.price} />)}
        </div>
    )
}

export default Expenses;
