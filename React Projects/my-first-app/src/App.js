import React, { useState, useEffect } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

let DUMMY_EXPENSE = [
//   {
//     id: "el",
//     title: "Food",
//     amount: 500,
//     date: new Date(2022, 7, 15),
//     // LocationOfExpenditure: "Restaurent Hyd",
//   },
//   {
//     id: "bl",
//     title: "Shopping",
//     amount: 5000,
//     date: new Date(2021, 10, 12),
//     // LocationOfExpenditure: "Trends",
//   },
//   {
//     id: "ml",
//     title: "Movie",
//     amount: 1000,
//     date: new Date(2020, 6, 13),
//     // LocationOfExpenditure: "Imax Hyd",
//   },
//   {
//     id: "cl",
//     title: "Tour",
//     amount: 20000,
//     date: new Date(2022, 4, 12),
//     // LocationOfExpenditure: "goa trip",
//   },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  async function fetchData() {
    const res = await fetch("https://sheet.best/api/sheets/4d60e925-d1cf-409f-addd-5eb358d05572");
    const data = await res.json();
    setExpenses(data);
    console.log(data, "in-App.js");
    // fetch("https://sheet.best/api/sheets/4d60e925-d1cf-409f-addd-5eb358d05572")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data, "in App.js");
    //     setExpenses(data);
    //   });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const addExpenseHandler = (expense) => {
    fetch(
      "https://sheet.best/api/sheets/4d60e925-d1cf-409f-addd-5eb358d05572",
      {
        method: "POST",
        body: JSON.stringify(expense),
        headers: {
          "content-Type": "application/json"
        }
      }).then(response => {
      fetchData();
    });
    // setExpenses((prevExpenses) =>{
    // return [expense, ...prevExpenses];
    // });
  };
console.log(expenses, "Appjs")
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
