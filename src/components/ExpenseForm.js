import React, { useState } from "react";
import "../ExpenseForm.css";

const ExpenseForm = (props) => {
    const [title,setTitle] = useState('');
    const [price,setPrice] = useState('');
    const [date, setDate] = useState('');
    const [isFormShowing, setIsFormSHowing] = useState(false);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handlePrice = (e) => {
        setPrice(e.target.value);
    }
    const handleDate = (e) => {
        setDate(e.target.value)
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        let NewExpense = {
            id: Math.random(),
            description: title,
            price: price,
            date: new Date(date)
        }

        // calling the parent function that handles the addition of new expenses
        props.handleAddingExpenses(NewExpense);
    }
    const handleShowForm = (e) => {
        e.preventDefault();
        setIsFormSHowing(prevState => {
            return !prevState;
        })
    }
  return (
    <>
    { isFormShowing &&  <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input onChange={handleTitle} type="text" />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input onChange={handlePrice} type="number" min="0" />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input onChange={handleDate} type="date" min="2019-01-01" />
          </div>
          <div className="new-expenses__actions">
            <button onClick={handleFormSubmit} type="submit">ADD EXPENSE</button>
          </div>
          <a href="#" onClick={handleShowForm}>close</a>
        </div>
      </form>
     }{isFormShowing===false && <div className="new-expenses__actions"><button onClick={handleShowForm}>ADD EXPENSES</button></div>}
      </>
  );
};

export default ExpenseForm;
