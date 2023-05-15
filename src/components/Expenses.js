import "../Expenses.css";
import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
    return(
        <div className="expenses">
            <ExpenseItem expenseDescription={props.expenses[0].description} expensePrice={props.expenses[0].price} expenseDate={props.expenses[0].date} />
            <ExpenseItem expenseDescription={props.expenses[1].description} expensePrice={props.expenses[1].price} expenseDate={props.expenses[1].date} />
            <ExpenseItem expenseDescription={props.expenses[2].description} expensePrice={props.expenses[2].price} expenseDate={props.expenses[2].date} />
        </div>
    )
}

export default Expenses;