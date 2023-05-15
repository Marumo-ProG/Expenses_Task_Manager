import "../ExpenseItem.css";

function ExpenseItem(props) {
    const expenseMonth = props.expenseDate.toLocaleString("en-US",{month: "long"});
    const expenseDay = props.expenseDate.toLocaleString("en-US", {day: "2-digit"});
    return(
        <div className="expense-item">
            <div>
                <div>{expenseMonth}</div>
                <div>{expenseDay}</div>
                <div>year</div>
            </div>
            <div className="expense-item__description">
                <h2 >{props.expenseDescription}</h2>
                <div className="expense-item__price">R {props.expensePrice}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;