import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import AddExpense from "./AddExpense";
import { useState } from "react";

const NewExpense = (props) => {
  const [addNewExpense, setAddNewExpense] = useState(true);

  const showExpenseFormHandler = () => {
    setAddNewExpense(false);
  };

  const showAddNewExpenseHandler = () => {
    setAddNewExpense(true);
  };

  if (addNewExpense === true) {
    return <AddExpense showExpenseForm={showExpenseFormHandler} />;
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: "e" + Math.floor(Math.random() * (100 - 1 + 1) + 1).toString(),
      ...enteredExpenseData,
    };

    props.addExpenseData(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        showAddNewExpense={showAddNewExpenseHandler}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
