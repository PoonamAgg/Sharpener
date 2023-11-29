import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
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
      <h2> Expense Tracker</h2>

      {expenses.map((expense) => (
        <ExpenseItem item={expense} />
      ))}
    </div>
  );
}

export default App;
