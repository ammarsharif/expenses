import React, { useState } from "react";

function ExpenseButton() {
  const [show, setShow] = useState(false);
  const SubmitHandler = () => {
    setShow(true);
  };
  return (
    <div className="new-expense__actions row">
      <button
        onClick={() => {
          SubmitHandler();
        }}
      >
        Add New Expenses
      </button>
    </div>
  );
}

export default ExpenseButton;
