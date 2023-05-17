import "../NewExpense.css";
import React from 'react';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    return (
        <div className="new-expense">
            <ExpenseForm handleAddingExpenses={props.handleAddingExpenses} />
        </div>
        
    )
}

export default NewExpense;