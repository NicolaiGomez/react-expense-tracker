import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  //   const [expenseData, setExpenseData] = useState({});
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // setExpenseData({
    //   ...enteredExpenseData,
    //   id: Math.floor(Math.random() * (100 - 1 + 1) + 1).toString(),
    // });
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * (100 - 1 + 1) + 1).toString(),
    };

    console.log(expenseData);
    props.addExpenseData(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
