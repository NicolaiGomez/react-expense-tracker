import Card from "../Card/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "../Chart/ExpenseChart";

function Expenses(props) {
  const [selectedYear, setSelectedyear] = useState("2020");

  const filterYearHandler = (filteredyear) => {
    setSelectedyear(filteredyear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() === parseInt(selectedYear)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesFilter
          selectedYear={selectedYear}
          onFilterYear={filterYearHandler}
        />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
