import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const formShow = () => {
    setShowForm(true);
  };

  const formHide = () => {
    setShowForm(false);
  };

  let newExpenseButton = (
    <button type="submit" onClick={formShow}>
      Add Expense
    </button>
  );

  if (showForm === true) {
    newExpenseButton = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={formHide}
      />
    );
  }

  return <div className="new-expense">{newExpenseButton}</div>;
};

export default NewExpense;
