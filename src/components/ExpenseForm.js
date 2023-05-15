import React, { useState } from "react";
import "../ExpenseForm.css";

const ExpenseForm = () => {
    const [title,setTitle] = useState('');
    const [price,setPrice] = useState('');
    const [date, setDate] = useState('');

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
            title: title,
            price: price,
            date: date
        }
        console.log(NewExpense);
    }
  return (
    <form>
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
      </div>
    </form>
  );
};

export default ExpenseForm;
