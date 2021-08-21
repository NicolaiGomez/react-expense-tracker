import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [titleInput, setTitleInput] = useState("");
  const [amountInput, setAmountInput] = useState(0);
  const [dateInput, setDateInput] = useState("");

  const amountChangeHandler = (event) => {
    setAmountInput(parseInt(event.target.value));
  };
  const dateChangeHandler = (event) => {
    setDateInput(event.target.value);
  };
  const titleChangeHandler = (event) => {
    setTitleInput(event.target.value);
  };

  const submitHandler = (event) => {
    // TODO: const [input, amount, date] = event.target;
    // console.log(input.value, amount.value, date.value); //rather than two way binding, I feel like you could just reset the form and
    //destructure the event.target array. No real need to hold form value in state. event.target.reset();
    event.preventDefault();
    const expenseData = {
      title: titleInput,
      amount: amountInput,
      date: new Date(dateInput),
    };

    props.onSaveExpenseData(expenseData);

    setTitleInput("");
    setAmountInput(0);
    setDateInput("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            onChange={titleChangeHandler}
            value={titleInput}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="integer"
            min="0.01"
            step="0.01"
            value={amountInput}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={dateInput}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
