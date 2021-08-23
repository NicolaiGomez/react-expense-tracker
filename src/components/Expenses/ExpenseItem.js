import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card/Card";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expense.title); //react hook that always returns an array with the current state value and function to set that value
  function clickHandler() {
    setTitle("Paper Towels");
  }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.expense.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.expense.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
