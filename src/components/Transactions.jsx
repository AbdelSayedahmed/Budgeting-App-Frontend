import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dateFormatter1, dateFormatter2 } from "../functions";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_URL)
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => {
        console.error("Error fetching transactions: ", error);
        setTransactions([]);
      });
  }, []);

  const getBudgetTotal = transactions.reduce((a, b) => {
    if (b.category === "Income" || b.category === "income") {
      return a + b.amount;
    } else {
      return a - b.amount;
    }
  }, 0);

  const getBudgetTotalStyle = () => {
    if (getBudgetTotal > 100) {
      return { backgroundColor: "green", color: "white" };
    } else if (getBudgetTotal >= 0 && getBudgetTotal <= 100) {
      return { backgroundColor: "yellow", color: "black" };
    } else {
      return { backgroundColor: "red", color: "white" };
    }
  };

  return (
    <div className="transactions-container">
      <h4
        className="transactions-container_budget"
        style={getBudgetTotalStyle()}
      >
        Budget Total: ${getBudgetTotal}
      </h4>
      <div className="transactions-container_minor">
        <div>
          <h3>Name</h3>
          <h3>From</h3>
          <p>Amount</p>
          <p>Category</p>
          <p>Date</p>
        </div>
        {transactions.map((transaction) => (
          <div key={transaction.id}>
            <h3>{transaction.name}</h3>
            <h3>{transaction.from}</h3>
            <p>${transaction.amount}</p>
            <p>{transaction.category}</p>
            <p>
              {dateFormatter2(transaction.date)} (
              {dateFormatter1(transaction.date)})
            </p>
            <Link to={`${transaction.id}`}>View Transaction</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
