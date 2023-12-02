import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  

  const deleteButton = (e) => {
    let item = e.target.parentElement;
    item.remove() 
  }


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> ${props.amount} </div>
      </div>
      <button onClick={deleteButton}> Delete </button>
    </Card>
  );
}

export default ExpenseItem;
