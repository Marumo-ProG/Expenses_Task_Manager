import "../ExpenseDate.css";
function ExpenseDate(props) {
  const expenseMonth = props.expenseDate.toLocaleString("en-US", {
    month: "long",
  });
  const expenseDay = props.expenseDate.toLocaleString("en-US", {
    day: "2-digit",
  });
  const expenseYear = props.expenseDate.toLocaleString("en-US", {
    year: "numeric",
  });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{expenseMonth}</div>
      <div className="expense-date__day">{expenseDay}</div>
      <div className="expense-date__year">{expenseYear}</div>
    </div>
  );
}

export default ExpenseDate;
