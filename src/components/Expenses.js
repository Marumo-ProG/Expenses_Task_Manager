import "../Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from 'react';
function Expenses(props) {
    let display = '';
    const [filter,setFilter] = useState(0);

    if(filter > 0){
        display = props.expenses.map(expense => {
            if(expense.date.getFullYear() == filter){
                return <ExpenseItem key={Math.random} expenseDescription={expense.description} expensePrice={expense.price} expenseDate={expense.date} />
            }
        })
    }
    const handleFilter = (year) => {
        setFilter(year);
    }
    return(
        <div className="expenses">
            <ExpensesFilter filter={handleFilter}/>
            {display}
        </div>
    )
}

export default Expenses;