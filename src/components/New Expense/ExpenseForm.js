import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label for="title">Title</label>
          <input id="title" type="text" />
        </div>
        <div className="new-expense__control">
          <label for="amount">Amount</label>
          <input id="amount" type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label for="date">Date</label>
          <input id="date" type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
