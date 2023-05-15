import "../ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
    
    return(
        <div className="expense-item">
            <ExpenseDate expenseDate={props.expenseDate}/>
            <div className="expense-item__description">
                <h2 >{props.expenseDescription}</h2>
                <div className="expense-item__price">R {props.expensePrice}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;