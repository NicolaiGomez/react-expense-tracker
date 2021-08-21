import ExpenseItem from "./ExpenseItem";
import Card from "../Card/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [selectedYear, setSelectedyear] = useState("2020");

  const filterYearHandler = (filteredyear) => {
    setSelectedyear(filteredyear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() === parseInt(selectedYear)
  );

  let expensesToShow = <p>There are no expenses to show.</p>;

  if (filteredExpenses.length > 0) {
    expensesToShow = filteredExpenses.map((expense) => {
      return <ExpenseItem key={expense.id} expense={expense}></ExpenseItem>;
    });
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          onFilterYear={filterYearHandler}
        />
        {expensesToShow}
      </Card>
    </div>
  );
}

export default Expenses;
