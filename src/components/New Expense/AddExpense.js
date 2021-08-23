import "./AddExpense.css";

const AddExpense = (props) => {
  return (
    <div className="new-expense">
      <button onClick={props.showExpenseForm}>Add New Expense</button>
    </div>
  );
};

export default AddExpense;
