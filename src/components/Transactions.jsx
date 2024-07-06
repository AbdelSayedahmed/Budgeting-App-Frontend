import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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


  return (
    <div className="transactions-container">
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <h3>{transaction.name}</h3>
          <h4>From: {transaction.from}</h4>
          <p>Amount: {transaction.amount}</p>
          <p>Date: {transaction.date}</p>
          <p>Category: {transaction.category}</p>
          <Link to={`${transaction.id}`}>View Transaction</Link>
        </div>
      ))}
    </div>
  );
}
