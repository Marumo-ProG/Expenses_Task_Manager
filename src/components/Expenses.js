import "../Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from 'react';
function Expenses(props) {
    let display = '';
    const [filter,setFilter] = useState(0);
    const handleFilter = (year) => {
        setFilter(year);
    }
    return(
        <div className="expenses">
            <ExpensesFilter filter={handleFilter}/>
            {props.expenses.map(expense => <ExpenseItem expenseDate={expense.date} expenseDescription={expense.description} expensePrice={expense.price} />)}
        </div>
    )
}

export default Expenses;