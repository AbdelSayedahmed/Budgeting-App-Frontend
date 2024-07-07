import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dateFormatter1, dateFormatter2 } from "../functions";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6298/transactions")
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

  return (
    <div className="transactions-container">
      <h4 className="transactions-container_budget">
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
            <p>{dateFormatter2(transaction.date)} ({dateFormatter1(transaction.date)})</p>
            <Link to={`${transaction.id}`}>View Transaction</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
