import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";
function NewExpenses(props) {
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow(true);
  };
  const cancelHandler = () => {
    setShow(false);
  };
  const onSaveDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAirExpenseData(expenseData);
  };
  return (
    <div className="new-expense">
      {!show && <button onClick={showHandler}>Add New Expenses</button>}
      {show && (
        <ExpenseForm
          onSaveExpenseData={onSaveDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
}

export default NewExpenses;
