import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import ExpenseForm from "./components/NewExpense/ExpenseForm";

const App = () => {
  let expenses = [
    {
      id: "e1",
      title: "School fee",
      amount: 250,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e2",
      title: "Books",
      amount: 350,
      date: new Date(2021, 3, 12),
    },
    {
      id: "e3",
      title: "house rent",
      amount: 4250,
      date: new Date(2021, 5, 11),
    },
    {
      id: "e4",
      title: "food",
      amount: 550,
      date: new Date(2023, 9, 12),
    },
  ];

  return (
    <div>
    
    {/* <ExampleForm/>  */}
    <NewExpense/>
    
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
