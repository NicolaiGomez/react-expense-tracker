import ExpenseItem from "./ExpenseItem";
import Card from "../Card/Card";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem expense={props.items[0]}></ExpenseItem>
      <ExpenseItem expense={props.items[1]}></ExpenseItem>
      <ExpenseItem expense={props.items[2]}></ExpenseItem>
      <ExpenseItem expense={props.items[3]}></ExpenseItem>
    </Card>
  );
}

export default Expenses;
