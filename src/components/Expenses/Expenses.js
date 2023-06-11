import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
  const [stateFilteredValue, setStateFilteredValue] = useState("2019");
  const filteredValue = (filtered) => {
    setStateFilteredValue(filtered);
  };
  const filteredExpanses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === stateFilteredValue;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={stateFilteredValue}
          onFilteredValue={filteredValue}
        />

        <ExpensesList items={filteredExpanses} />
      </Card>
    </div>
  );
}

export default Expenses;

// const app = () => {
//   <div>HOC</div>
//   <div>
//     <
//   </div>
// };
// const counter = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <button
//       onClick={() => {
//         setCount(count + 1);
//       }}
//     ></button>
//   );
// };
